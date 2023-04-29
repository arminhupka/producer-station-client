/* eslint-disable */
import { type ChangeEvent, useEffect, useState } from "react";
import { api } from "../utils/api";
import { OkResponseDto } from "../api/api-types";

const chunkSize = 1024 * 1024 * 5;

interface InitializeResponseType {
  Key: string;
  UploadId: string;
}

interface UploadResponse {
  success: boolean;
  data: {
    etag: string;
  };
}

interface FinishedUploadedResponse {
  _id: string;
  filename: string;
  custom_name: string;
  location: string;
  public: string;
  size: number;
  type: string;
  etag: string;
  updatedAt: Date;
  createdAt: Date;
  uploadedBy: string;
}

const useChunkedUploader = () => {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);

  const [uploadedFileDetails, setUploadedFileDetails] =
    useState<FinishedUploadedResponse | null>(null);

  const [partsToUpload, setPartsToUpload] = useState<number>(0);
  const [uploadedParts, setUploadedParts] = useState<number>(0);

  const [uploadedPercents, setUploadedPercents] = useState<number>(0);

  const [isUploaded, setIsUploaded] = useState<boolean>();
  const [uploading, setUploading] = useState<boolean>(false);

  const [uploadID, setUploadId] = useState<string | null>(null);
  const [key, setKey] = useState<string | null>(null);

  const calculateParts = (fileSize: number, chunkSizes: number): number => {
    return Math.ceil(fileSize / chunkSizes);
  };

  const selectFile = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<{ file: File; parts: number }> => {
    return new Promise((resolve, reject) => {
      if (!(e.target.files && e.target.files.length)) {
        reject(new Error("No files has been selected"));
      }

      if (e.target.files && e.target.files.length) {
        const file = e.target.files[0];
        const parts = calculateParts(file.size, chunkSize);
        setPartsToUpload(parts);
        setSelectedFile(file);
        void resolve({ file, parts });
      }
    });
  };

  const uploadInitializer = async (file: File): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      if (!file) {
        reject();
      }

      const formData = new FormData();
      formData.append("fileName", file.name);
      formData.append("fileType", file.type);
      formData.append("action", "init");

      try {
        const { data } = await api.post<InitializeResponseType>(
          "/upload",
          formData,
        );
        resolve(data.UploadId);
      } catch (err) {
        console.log("err");
        reject();
      }
    });
  };

  const uploadChunks = async (
    file: File,
    uploadId: string,
    parts: number,
  ): Promise<string[]> => {
    const blobs: Array<{ id: number; blob: Blob }> = [];
    const tags: string[] = [];

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
    // await Promise.all(
    //   blobs.map(async (blob) => {
    //     const formData = new FormData();
    //     formData.append("uploadId", uploadId);
    //     formData.append("fileName", file.name);
    //     formData.append("fileType", file.type);
    //     formData.append("action", "upload");
    //     formData.append("currentPart", (blob.id + 1).toString());
    //     formData.append("file", blobs[blob.id].blob);
    //     formData.append("contentLength", blob.blob.size.toString());
    //
    //     const { data } = await api.post<UploadResponse>("/upload", formData);
    //     tags.push(data.data.etag);
    //     setUploadedParts((parts) => parts + 1);
    //   }),
    // );

    // UPLOADING BLOBS ONE BY ONE
    for (const blob of blobs) {
      const formData = new FormData();
      formData.append("uploadId", uploadId);
      formData.append("fileName", file.name);
      formData.append("fileType", file.type);
      formData.append("action", "upload");
      formData.append("currentPart", (blob.id + 1).toString());
      formData.append("file", blobs[blob.id].blob);
      formData.append("contentLength", blob.blob.size.toString());
      const { data } = await api.post<UploadResponse>("/upload", formData);
      tags.push(data.data.etag);
      setUploadedParts((parts) => parts + 1);
    }

    return tags;
  };

  const finalizeUpload = async (
    file: File,
    uploadID: string,
    parts: string[],
  ): Promise<FinishedUploadedResponse> => {
    const formData = new FormData();
    formData.append("uploadId", uploadID);
    formData.append("fileName", file.name);
    formData.append("fileType", file.type);
    formData.append("action", "finish");
    formData.append("parts", parts.toString());

    const { data } = await api.post<FinishedUploadedResponse>(
      "/upload",
      formData,
    );

    setIsUploaded(true);
    return data;
  };

  const select = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!(e.target.files && e.target.files.length)) {
      return;
    }

    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      const parts = calculateParts(file.size, chunkSize);
      setPartsToUpload(parts);
      setSelectedFile(file);
    }
  };

  const startUpload = async (): Promise<void> => {
    if (!selectedFile) return;

    try {
      setUploading(true);
      setKey(selectedFile.name);
      const uploadId = await uploadInitializer(selectedFile);
      setUploadId(uploadId);
      const uploadedParts = await uploadChunks(
        selectedFile,
        uploadId,
        partsToUpload,
      );
      const uploadedData = await finalizeUpload(
        selectedFile,
        uploadId,
        uploadedParts,
      );
      setUploadedFileDetails(uploadedData);
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const upload = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setUploading(true);
    try {
      const { file, parts } = await selectFile(e);

      setKey(file.name);

      const uploadId = await uploadInitializer(file);

      setUploadId(uploadId);

      const uploadedParts = await uploadChunks(file, uploadId, parts);
      const uploadedData = await finalizeUpload(file, uploadId, uploadedParts);
      setUploadedFileDetails(uploadedData);
    } catch {
      console.error("Error during uploading");
    } finally {
      setUploading(false);
    }
  };

  const cancelUpload = async (): Promise<void> => {
    await api
      .delete<OkResponseDto>("/upload/cancel", {
        data: {
          uploadID,
          key,
        },
      })
      .then(() => {
        setSelectedFile(null);
        setUploadedFileDetails(null);
        setPartsToUpload(0);
        setUploadedParts(0);
        setIsUploaded(false);
        setUploadId(null);
        setKey(null);
      });
  };

  useEffect(() => {
    const value = (uploadedParts / partsToUpload) * 100;

    setUploadedPercents(value || 0);
  }, [partsToUpload, uploadedParts]);

  return {
    upload,
    uploadedPercents,
    uploadedFileDetails,
    selectedFile,
    isUploaded,
    cancelUpload,
    uploading,
    select,
    startUpload,
  };
};

export default useChunkedUploader;
