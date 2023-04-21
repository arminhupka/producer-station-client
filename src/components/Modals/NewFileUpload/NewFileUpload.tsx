import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";

import BaseModal, { type IBaseModalProps } from "../BaseModal";
import { type ReactElement, useState } from "react";
import { UploadTypeEnum } from "../../../enum/UploadTypeEnum";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const NewFileUpload = ({ open, onClose }: TProps): ReactElement => {
  const [uploadType, setUploadType] = useState<null | UploadTypeEnum>(null);

  const handleChange = (event: SelectChangeEvent): void => {
    setUploadType(event.target.value as UploadTypeEnum);
  };

  return (
    <BaseModal title='Select file to upload' onClose={onClose} open={open}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='upload-type-select-label'>Age</InputLabel>
            <Select
              labelId='upload-type-select-label'
              value={uploadType}
              label='Type'
              onChange={handleChange}>
              <MenuItem value={UploadTypeEnum.AUDIO_PREVIEW}>
                Audio Preview
              </MenuItem>
              <MenuItem value={UploadTypeEnum.PRODUCT_FILE}>
                Product File
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField label='File name' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type='file' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' fullWidth>
            Upload File
          </Button>
        </Grid>
      </Grid>
    </BaseModal>
  );
};

export default NewFileUpload;
