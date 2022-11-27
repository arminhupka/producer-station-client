import { Button, Grid, TextField } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { NewLabelDto, NewLabelResponseDto } from "../../../api/api";
import { ApiError } from "../../../api/apiError";
import { api } from "../../../utils/api";
import BaseModal, { IBaseModalProps } from "../BaseModal";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const NewLabelModal = ({ onClose, open }: TProps): ReactElement => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<NewLabelDto>();

  const { mutate, isLoading } = useMutation<AxiosResponse<NewLabelResponseDto>, AxiosError<ApiError>, NewLabelDto>(
    async ({ name }) => await api.post<NewLabelResponseDto>("/labels", { name }, { withCredentials: true }),
    {
      onSuccess: ({ data }) => {
        navigate(`/labels/${data._id}`);
      },
    },
  );

  const handleAddNewLabel: SubmitHandler<NewLabelDto> = (form) => {
    mutate({ name: form.name });
  };

  return (
    <BaseModal title='New Label' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit(handleAddNewLabel)}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <TextField label='Label name' fullWidth disabled={isLoading} {...register("name")} />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' fullWidth disabled={isLoading}>
              Add New Labelw
            </Button>
          </Grid>
        </Grid>
      </form>
    </BaseModal>
  );
};

export default NewLabelModal;
