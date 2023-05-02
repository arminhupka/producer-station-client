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
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import formatBytes from "../../../utils/formatBytes";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

interface IProps extends TProps {
  productId: string;
  onUploaded?: () => void;
}

interface IForm {
  customName: string;
}

const NewFileUpload = ({
  open,
  onClose,
  productId,
  onUploaded,
}: IProps): ReactElement => {
  const {
    uploadedPercents,
    isUploaded,
    uploadedFileDetails,
    uploading,
    select,
    startUpload,
    uploadedBytes,
    selectedFile,
  } = useChunkedUploader();

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

  const { register, getValues } = useForm<IForm>();

  const handleChange = (event: SelectChangeEvent): void => {
    setUploadType(event.target.value as UploadTypeEnum);
  };

  useEffect(() => {
    if (isUploaded && uploadedFileDetails) {
      const customName = getValues("customName");

      addFileToProductMutation.mutate({
        fileId: uploadedFileDetails._id,
        customName,
      });
    }
  }, [isUploaded, uploadedFileDetails]);

  return (
    <BaseModal title='Select file to upload' onClose={onClose} open={open}>
      <Grid container spacing={2}>
        {!uploading && (
          <>
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
              <TextField
                label='File name'
                fullWidth
                {...register("customName", { required: true, minLength: 3 })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField type='file' onChange={select} fullWidth />
            </Grid>
          </>
        )}
        {uploading && (
          <Grid item xs={12}>
            <Typography mb={2} textAlign='center' fontWeight={600}>
              Uploaded {formatBytes(uploadedBytes)} from{" "}
              {formatBytes(selectedFile?.size ?? 0)}
            </Typography>
            <LinearProgress variant='determinate' value={uploadedPercents} />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant='contained'
            type='submit'
            fullWidth
            onClick={startUpload}>
            Upload
          </Button>
        </Grid>
      </Grid>
    </BaseModal>
  );
};

export default NewFileUpload;
