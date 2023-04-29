import { type ReactElement } from "react";
import {
  StyledButtonsWrapper,
  StyledFileName,
  StyledIconWrapper,
  StyledInfoWrapper,
  StyledMainWrapper,
  StyledWrapper,
} from "./FileItem.styles";
import Typography from "@mui/material/Typography";
import { type FileDto } from "../../../api/api-types";
import { useMutation } from "react-query";
import { type AxiosResponse } from "axios";
import { api } from "../../../utils/api";
import { handleDownloadFile, queryProduct } from "../../../api/queries";
import { Button, Paper } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface IProps {
  file: FileDto;
  productId: string;
}

const FileItem = ({ file, productId }: IProps): ReactElement => {
  const { refetch } = queryProduct(productId);

  const mutation = useMutation<AxiosResponse<FileDto>>(
    async () => await api.delete<FileDto>(`/files/${file._id}`),
    {
      onSuccess: async (): Promise<void> => {
        await refetch();
      },
    },
  );

  const downloadFileQuery = handleDownloadFile(file._id);

  const handleDeleteFile = (): void => {
    mutation.mutate();
  };

  const handleDownloadFIle = async (): Promise<void> => {
    await downloadFileQuery.refetch();
    const a = document.createElement("a");
    const response = downloadFileQuery.data?.data;
    if (response) {
      a.href = response;
      a.click();
    }
  };

  return (
    <Paper elevation={8}>
      <StyledWrapper>
        <StyledMainWrapper>
          <StyledIconWrapper>
            <AttachFileIcon color='secondary' />
          </StyledIconWrapper>
          <StyledInfoWrapper>
            <Typography fontSize={14}>File type</Typography>
            <StyledFileName>{file.filename}</StyledFileName>
          </StyledInfoWrapper>
        </StyledMainWrapper>
        <StyledButtonsWrapper>
          <Button
            variant='outlined'
            size='small'
            startIcon={<FileDownloadIcon />}
            onClick={handleDownloadFIle}>
            Download
          </Button>
          <Button
            onClick={handleDeleteFile}
            variant='outlined'
            size='small'
            startIcon={<DeleteForeverIcon />}
            color='error'>
            Delete
          </Button>
        </StyledButtonsWrapper>
      </StyledWrapper>
    </Paper>
  );
};

export default FileItem;
