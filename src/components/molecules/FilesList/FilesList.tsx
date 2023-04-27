import { type ReactElement } from "react";
import { Box } from "@mui/material";
import { type FileDto } from "../../../api/api-types";
import FileItem from "../FileItem/FileItem";

interface IProps {
  productId: string;
  files: FileDto[];
}

const FilesList = ({ files, productId }: IProps): ReactElement => (
  <Box display='flex' flexDirection='column' gap={4}>
    {files.map((f) => (
      <FileItem key={f._id} file={f} productId={productId} />
    ))}
  </Box>
);

export default FilesList;
