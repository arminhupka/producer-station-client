import { type ReactElement } from "react";
import BaseModal, { type IBaseModalProps } from "../BaseModal";
import { Alert, Button, Grid, TextField } from "@mui/material";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import {
  type CategoryDto,
  type CreateCategoryDto,
} from "../../../api/api-types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddCategory } from "../../../api/CategoryQueries";
import Loader from "../../atoms/Loader/Loader";
import { useMutation } from "react-query";
import { type AxiosError } from "axios";
import { type ApiError } from "../../../api/apiError";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

interface IProps extends TProps {
  onRefetch: () => void;
}

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Category name is required")
    .min(3, "Category name must be at least 3 characters"),
});

const NewCategoryModal = ({
  open,
  onRefetch,
  onClose,
}: IProps): ReactElement => {
  const mutation = useMutation<
    CategoryDto,
    AxiosError<ApiError>,
    CreateCategoryDto
  >(async (form) => await AddCategory(form), {
    onSuccess: (): void => {
      onRefetch();
      onClose();
      reset();
    },
  });

  const { register, handleSubmit, formState, reset } =
    useForm<CreateCategoryDto>({
      resolver: yupResolver(FormSchema),
      reValidateMode: "onSubmit",
    });

  const handleAddNewCategory: SubmitHandler<CreateCategoryDto> = (form) => {
    mutation.mutate(form);
  };

  const handleClose = (): void => {
    onClose();
    reset();
  };

  return (
    <BaseModal title='Add New Category' onClose={handleClose} open={open}>
      <>
        {mutation.isLoading && <Loader />}
        {!mutation.isLoading && (
          <form onSubmit={handleSubmit(handleAddNewCategory)}>
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
              {mutation.error && (
                <Grid item xs={12}>
                  <Alert severity='error'>
                    {mutation.error.response?.data.message}
                  </Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Add New Category
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default NewCategoryModal;
