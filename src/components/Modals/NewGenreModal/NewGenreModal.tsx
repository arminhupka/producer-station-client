import { type ReactElement } from "react";
import BaseModal, { type IBaseModalProps } from "../BaseModal";
import { Alert, Button, Grid, TextField } from "@mui/material";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import {
  type CreateCategoryDto,
  type CreateGenreDto,
} from "../../../api/api-types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Loader from "../../atoms/Loader/Loader";
import { addGenre } from "../../../api/genres";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

interface IProps extends TProps {
  onRefetch: () => void;
}

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Genre name is required")
    .min(3, "Genre name must be at least 3 characters"),
});

const NewGenreModal = ({ open, onRefetch, onClose }: IProps): ReactElement => {
  const { isLoading, error, mutate } = addGenre({
    onSuccess: (): void => {
      onRefetch();
      onClose();
      reset();
    },
  });

  const { register, handleSubmit, formState, reset } = useForm<CreateGenreDto>({
    resolver: yupResolver(FormSchema),
    reValidateMode: "onSubmit",
  });

  const handleAddNewGenre: SubmitHandler<CreateCategoryDto> = (form) => {
    mutate(form.name);
  };

  const handleClose = (): void => {
    onClose();
    reset();
  };

  return (
    <BaseModal title='Add New Genre' onClose={handleClose} open={open}>
      <>
        {isLoading && <Loader />}
        {!isLoading && (
          <form onSubmit={handleSubmit(handleAddNewGenre)}>
            <Grid container gap={2}>
              <Grid item xs={12}>
                <TextField
                  helperText={formState.errors.name?.message}
                  error={!!formState.errors.name}
                  label='Name'
                  fullWidth
                  {...register("name")}
                />
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Alert severity='error'>{error.response?.data.message}</Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Add New Genre
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default NewGenreModal;
