/* eslint-disable */

import { type ChangeEvent, useEffect, useState } from "react";

import { type FileDto } from "../api/api-types";
import { api } from "../utils/api";
import { useLocation } from "react-router-dom";

// enum UploadStatus {
//   INIT = "Initialization",
//   UPLOADING = "Uploading",
//   PROCESSING = "Processing",
//   COMPLETED = "Completed",
//   READY_TO_UPLOAD = "Ready To Upload",
//   REQUESTING_URL = "Requesting for signed URL",
//   ERROR = "Ups, some error, check dev tools",
// }

const chunkSize = 1024 * 1024 * 5;

interface InitializeResponseType {
  Key: string;
  UploadId: string;
}

interface UploadedResponse {
  success: true;
  data: {
    etag: string;
  };
}

const useUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [parts, setParts] = useState<number>(0);
  const [uploadedParts, setUploadedParts] = useState<number>(0);
  const [uploadId, setUploadId] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadedPercents, setUploadedPercents] = useState<number>(0);
  const [details, setDetails] = useState<null | FileDto>(null);
  const location = useLocation();

  const selectFile = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    await new Promise((resolve, reject) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      if (!e.target.files) {
        reject();
        return;
      }

      const file = e.target.files[0];
      setFile(file);
      setParts(Math.ceil(file.size / chunkSize));
      // @ts-ignore
      resolve();
    });
  };

  const uploadInit = async (file: File): Promise<void> => {
    if (!file) return;

    const formData = new FormData();
    formData.append("fileName", file.name);
    formData.append("fileType", file.type);
    formData.append("action", "init");

    try {
      const { data } = await api.post<InitializeResponseType>(
        "http://localhost:9090/upload",
        formData,
      );
      setUploadId(data.UploadId);
    } catch (err) {
      console.error(err);
    }
  };
  const uploadChunks = async (file: File) => {
    if (!file) return;

    setIsUploading(true);
    const blobs: Array<{ id: number; blob: Blob }> = [];
    const tags: string[] = [];

    let blobSizes = 0;

    // CALCULATING BLOBS
    for (const i of Array.from(Array(parts).keys())) {
      const index = i;
      const start = index * chunkSize;
      const end = (index + 1) * chunkSize;
      const blob = index < parts ? file.slice(start, end) : file.slice(start);
      blobs.push({
        id: i,
        blob,
      });
    }

    // UPLOADING BLOBS
    for (const blob of blobs) {
      const formData = new FormData();
      formData.append("uploadId", uploadId);
      formData.append("fileName", file.name);
      formData.append("fileType", file.type);
      formData.append("action", "upload");
      formData.append("currentPart", (blob.id + 1).toString());
      formData.append("file", blobs[blob.id].blob);
      formData.append("contentLength", blob.blob.size.toString());
      const { data } = await api.post<UploadedResponse>(
        "http://localhost:9090/upload",
        formData,
      );
      tags.push(data.data.etag);
      setUploadedParts((parts) => parts + 1);

      console.log((blobSizes += blob.blob.size));
      console.log(file.size);
    }

    const finalizeFormData = new FormData();
    finalizeFormData.append("uploadId", uploadId);
    finalizeFormData.append("fileName", file.name);
    finalizeFormData.append("fileType", file.type);
    finalizeFormData.append("action", "finish");
    finalizeFormData.append("parts", tags.toString());
    const { data } = await api.post<FileDto>(
      "http://localhost:9090/upload",
      finalizeFormData,
    );

    console.log("finished");
    setDetails(data);
    setFile(null);
    setParts(0);
    setUploadId("");
    setIsUploading(false);
  };

  const handleUpload = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    void selectFile(e);
    if (!file) return;
    void uploadInit(file);
  };

  useEffect(() => {
    if (file) {
      void uploadInit(file);
    }
  }, [file]);

  useEffect(() => {
    if (uploadId && file) {
      void uploadChunks(file);
    }
  }, [uploadId, file]);

  useEffect(() => {
    if (isNaN(uploadedParts / parts)) {
      setUploadedPercents(0);
    } else {
      setUploadedPercents(+(uploadedParts / parts).toFixed(2) * 100);
    }
  }, [uploadedParts]);

  return {
    selectFile,
    isUploading,
    handleUpload,
    uploadedPercents,
    details,
  };
};

export default useUploader;
