import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";

import BaseModal, { type IBaseModalProps } from "../BaseModal";
import { type ReactElement, useEffect, useState } from "react";
import { UploadTypeEnum } from "../../../enum/UploadTypeEnum";
import useChunkedUploader from "../../../hooks/useChunkedUploader";
import { useMutation } from "react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import {
  type AddFileToProductDto,
  type ProductDto,
} from "../../../api/api-types";
import { type ApiError } from "../../../api/apiError";
import { api } from "../../../utils/api";
import FileInput from "../../atoms/FileInput/FileInput";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

interface IProps extends TProps {
  productId: string;
  onUploaded?: () => void;
}

const NewFileUpload = ({
  open,
  onClose,
  productId,
  onUploaded,
}: IProps): ReactElement => {
  const { upload, uploadedPercents, isUploaded, uploadedFileDetails } =
    useChunkedUploader();

  const addFileToProductMutation = useMutation<
    AxiosResponse<ProductDto>,
    AxiosError<ApiError>,
    AddFileToProductDto
  >(
    async (form) =>
      await api.post<ProductDto>(`/products/${productId}/file`, form),
    {
      onSuccess: () => {
        if (onUploaded) onUploaded();
        onClose();
      },
    },
  );

  const [uploadType, setUploadType] = useState<null | UploadTypeEnum>(null);

  const handleChange = (event: SelectChangeEvent): void => {
    setUploadType(event.target.value as UploadTypeEnum);
  };

  useEffect(() => {
    if (isUploaded && uploadedFileDetails) {
      addFileToProductMutation.mutate({ fileId: uploadedFileDetails._id });
    }
  }, [isUploaded, uploadedFileDetails]);

  return (
    <BaseModal title='Select file to upload' onClose={onClose} open={open}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='upload-type-select-label'>File Type</InputLabel>
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
          <TextField type='file' onChange={upload} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <LinearProgress variant='determinate' value={uploadedPercents} />
        </Grid>
        <Grid item xs={12}>
          <FileInput />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' fullWidth>
            Upload
          </Button>
        </Grid>
      </Grid>
    </BaseModal>
  );
};

export default NewFileUpload;
