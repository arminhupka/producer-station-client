import { Button, Grid, LinearProgress, TextField } from "@mui/material";
import * as yup from "yup";

import BaseModal, { type IBaseModalProps } from "../BaseModal";
import { type ReactElement, useEffect } from "react";
import useChunkedUploader from "../../../hooks/useChunkedUploader";
import { type SubmitHandler, useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import formatBytes from "../../../utils/formatBytes";
import { yupResolver } from "@hookform/resolvers/yup";
import { addFileToProduct } from "../../../api/products";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

interface IProps extends TProps {
  productId: string;
  onUploaded?: () => void;
}

interface IForm {
  customName: string;
  file: FileList;
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
    startUpload,
    uploadedBytes,
    selectedFile,
    abort,
    setFile,
  } = useChunkedUploader();

  const { mutate } = addFileToProduct(productId, {
    onSuccess: () => {
      if (onUploaded) onUploaded();
      onClose();
    },
  });

  const schema = yup.object().shape({
    customName: yup.string().min(5).required(),
    file: yup
      .mixed()
      .test("file-added", (value) => {
        const array = value as FileList;
        if (array.length) return true;
      })
      .required("file is required"),
  });

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const handleUploadAbort = (): void => {
    abort();
  };

  const handleUpload: SubmitHandler<IForm> = async (form) => {
    console.log(form);
    if (!form.file.length) return;
    setFile(form.file[0]);
    await startUpload();
  };

  useEffect(() => {
    if (isUploaded && uploadedFileDetails) {
      mutate({
        fileId: uploadedFileDetails._id,
      });
    }
  }, [isUploaded, uploadedFileDetails]);

  return (
    <BaseModal
      title='Select file to upload'
      onClose={onClose}
      open={open}
      hideCloseBtn={uploading}>
      <Grid container spacing={2}>
        {!uploading && (
          <>
            <Grid item xs={12}>
              <TextField
                label='File name'
                fullWidth
                error={!!errors.customName?.message}
                helperText={errors.customName?.message}
                {...register("customName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='file'
                helperText={errors.file?.message}
                error={!!errors.file}
                {...register("file")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                type='submit'
                fullWidth
                disabled={!isValid}
                onClick={handleSubmit(handleUpload)}>
                Upload
              </Button>
            </Grid>
          </>
        )}
        {uploading && (
          <>
            <Grid item xs={12}>
              <Typography mb={2} textAlign='center' fontWeight={600}>
                Uploaded {formatBytes(uploadedBytes)} from{" "}
                {formatBytes(selectedFile?.size ?? 0)}
              </Typography>
              <LinearProgress variant='determinate' value={uploadedPercents} />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleUploadAbort}
                variant='contained'
                fullWidth
                color='error'>
                Cancel
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </BaseModal>
  );
};

export default NewFileUpload;
