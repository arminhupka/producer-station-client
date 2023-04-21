import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { type ReactElement, useEffect, useState } from "react";
import useChunkedUploader from "../../hooks/useChunkedUploader";
import { useAppDispatch } from "../../store";
import {
  createUploadNode,
  setUploadProgress,
} from "../../features/uploadSlice";
import { UploadTypeEnum } from "../../enum/UploadTypeEnum";

interface IProps {
  onFinish?: () => Promise<void> | void;
}

const FileUploader = ({ onFinish }: IProps): ReactElement => {
  const [nodeId, setNodeId] = useState<number>(0);
  const dispatch = useAppDispatch();

  const {
    upload,
    uploadedPercents,
    uploadedFileDetails,
    selectedFile,
    isUploaded,
    cancelUpload,
  } = useChunkedUploader();

  useEffect(() => {
    if (onFinish) {
      console.log(uploadedFileDetails);
      void onFinish();
    }
  }, [isUploaded]);

  useEffect(() => {
    if (!selectedFile) return;

    const nodeId = Math.round(Math.random() * 1000000);
    setNodeId(nodeId);

    dispatch(
      createUploadNode({
        type: UploadTypeEnum.PRODUCT_FILE,
        uploaded: 0,
        id: nodeId,
        custom_name: "custom name",
      }),
    );
  }, [selectedFile]);

  useEffect(() => {
    if (!nodeId) return;
    dispatch(setUploadProgress({ id: nodeId, progress: uploadedPercents }));
  }, [uploadedPercents, nodeId]);

  return (
    <Paper sx={{ width: "100%" }}>
      <button onClick={cancelUpload}>cancel</button>
      <Box p={2} display='flex' flexDirection='column' gap={2}>
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='space-between'>
          {selectedFile && (
            <Box>
              <Typography fontSize='small'>Audio Preview</Typography>
              <Typography fontWeight={600}>{selectedFile.name}</Typography>
            </Box>
          )}
        </Box>
        <LinearProgress variant='determinate' value={uploadedPercents} />
      </Box>
      <input type='file' onChange={upload} />
      <button>handle upload</button>
    </Paper>
  );
};

export default FileUploader;
