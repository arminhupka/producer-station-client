import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, TextField } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { string } from "yup";

import { CreateLabelResponseDto, NewLabelDto } from "../../../api/api";
import { ApiError } from "../../../api/apiError";
import { useAppSelector } from "../../../store";
import { api } from "../../../utils/api";
import BaseModal, { IBaseModalProps } from "../BaseModal";

const FormSchema = yup.object({
  name: string().min(6, "Label name must be at least 6 characters").required(),
});

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const NewLabelModal = ({ onClose, open }: TProps): ReactElement => {
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.userReducer.user?._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewLabelDto>({
    resolver: yupResolver(FormSchema),
  });

  const { mutate, isLoading } = useMutation<
    AxiosResponse<CreateLabelResponseDto>,
    AxiosError<ApiError>,
    NewLabelDto
  >(
    async ({ name, user }) =>
      await api.post<CreateLabelResponseDto>(
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

  return (
    <BaseModal title='New Label' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit(handleAddNewLabel)}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <TextField
              label='Label name'
              fullWidth
              disabled={isLoading}
              helperText={errors.name?.message}
              error={!!errors.name}
              required
              {...register("name", { required: true })}
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
        </Grid>
      </form>
    </BaseModal>
  );
};

export default NewLabelModal;
