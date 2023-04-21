import { type ReactElement } from "react";
import { Box, Button } from "@mui/material";

interface IProps {
  onUpdate?: () => Promise<void>;
  onSubmit?: () => Promise<void>;
}

const ProductFormButtons = ({ onSubmit, onUpdate }: IProps): ReactElement => (
  <Box mb={2} display='flex' gap={2} justifyContent='flex-end'>
    <Button onClick={onUpdate}>Update</Button>
    <Button variant='contained' onClick={onSubmit}>
      Submit
    </Button>
  </Box>
);

export default ProductFormButtons;
