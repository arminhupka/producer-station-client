import { Button, Grid, TextField } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { ReactElement } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { CreateProductDto, Product } from "../../../api/api";
import { ApiError } from "../../../api/apiError";
import { api } from "../../../utils/api";
import BaseModal, { IBaseModalProps } from "../BaseModal";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const NewProductModal = ({ open, onClose }: TProps): ReactElement => {
  const navigate = useNavigate();
  const methods = useForm<CreateProductDto>();
  const { mutate, isLoading } = useMutation<AxiosResponse<Product>, AxiosError<ApiError>, CreateProductDto>(
    async ({ name, label }) => await api.post("/product", { name, label }, { withCredentials: true }),
    {
      onSuccess: (data) => {
        navigate(`/products/${data.data._id}`);
      },
    },
  );

  const handleAddProduct: SubmitHandler<CreateProductDto> = (form) => {
    console.log(form);
    mutate({
      name: form.name,
      label: form.label,
    });
  };

  return (
    <BaseModal title='New Product' onClose={onClose} open={open}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleAddProduct)}>
          <Grid container gap={2}>
            <Grid item xs={12}>
              <TextField label='Label' fullWidth disabled={isLoading} {...methods.register("label")} />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Product Name' fullWidth disabled={isLoading} {...methods.register("name")} />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth disabled={isLoading}>
                Add New Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </BaseModal>
  );
};

export default NewProductModal;
