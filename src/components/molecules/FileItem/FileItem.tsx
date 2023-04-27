import { type ReactElement } from "react";
import {
  StyledFileName,
  StyledInfoWrapper,
  StyledWrapper,
} from "./FileItem.styles";
import Typography from "@mui/material/Typography";
import { type FileDto } from "../../../api/api-types";
import { useMutation } from "react-query";
import { type AxiosResponse } from "axios";
import { api } from "../../../utils/api";
import { queryProduct } from "../../../api/queries";
import { Button, IconButton, Paper } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

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

  const handleDeleteFile = (): void => {
    mutation.mutate();
  };

  return (
    <Paper elevation={8}>
      <StyledWrapper>
        <IconButton color='error' onClick={handleDeleteFile}>
          <DeleteForeverIcon />
        </IconButton>
        <StyledInfoWrapper>
          <Typography fontSize={14}>File type</Typography>
          <StyledFileName>{file.filename}</StyledFileName>
        </StyledInfoWrapper>
        <Button
          variant='outlined'
          size='small'
          startIcon={<FileDownloadIcon />}>
          Download
        </Button>
      </StyledWrapper>
    </Paper>
  );
};

export default FileItem;
