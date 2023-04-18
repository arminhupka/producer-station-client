import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Grid, TextField } from "@mui/material";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ReactElement } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { type LabelDto, type NewLabelDto } from "../../../api/api-types";
import { type ApiError } from "../../../api/apiError";
import { useAppSelector } from "../../../store";
import { api } from "../../../utils/api";
import { NewLabelFormValidator } from "../../../validators/NewLabelValidator";
import BaseModal, { type IBaseModalProps } from "../BaseModal";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const NewLabelModal = ({ onClose, open }: TProps): ReactElement => {
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.userReducer.user?._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<NewLabelDto>({
    resolver: yupResolver(NewLabelFormValidator),
    mode: "onChange",
  });

  const { mutate, isLoading, error, reset } = useMutation<
    AxiosResponse<LabelDto>,
    AxiosError<ApiError>,
    NewLabelDto
  >(
    async ({ name, user }) =>
      await api.post<LabelDto>(
        "/labels",
        { name, user },
        { withCredentials: true },
      ),
    {
      onSuccess: ({ data }) => {
        navigate(`/panel/labels/${data._id}`);
      },
    },
  );

  const handleAddNewLabel: SubmitHandler<NewLabelDto> = (form) => {
    if (!userId) return;
    mutate({ name: form.name, user: userId });
  };

  const handleClose = (): void => {
    onClose();
    reset();
    formReset();
  };

  return (
    <BaseModal title='New Label' onClose={handleClose} open={open}>
      <form onSubmit={handleSubmit(handleAddNewLabel)}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <TextField
              label='Label name'
              fullWidth
              disabled={isLoading}
              helperText={errors.name?.message}
              error={!!errors.name}
              {...register("name")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              variant='contained'
              fullWidth
              disabled={isLoading}>
              Add New Label
            </Button>
          </Grid>
          {error?.response?.data && (
            <Grid item xs={12}>
              <Alert severity='error'>{error.response.data.message}</Alert>
            </Grid>
          )}
        </Grid>
      </form>
    </BaseModal>
  );
};

export default NewLabelModal;
