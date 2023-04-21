import { type ReactElement, useState } from "react";
import { Box, Button } from "@mui/material";
import FileUploader from "../../../FileUploader/FileUploader";
import useModalState from "../../../../hooks/useModalState";
import NewFileUpload from "../../../Modals/NewFileUpload/NewFileUpload";

interface IProps {
  productId: string;
}

const ProductFilesTab = ({ productId }: IProps): ReactElement => {
  const [files] = useState<number[]>([1]);
  const { isOpen, onClose, onOpen } = useModalState();

  return (
    <>
      <NewFileUpload onClose={onClose} open={isOpen} productId={productId} />
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        alignItems='flex-start'>
        {files.map((item) => (
          <FileUploader key={item} />
        ))}
        <Button variant='contained' onClick={onOpen}>
          Add new file
        </Button>
      </Box>
    </>
  );
};

export default ProductFilesTab;
