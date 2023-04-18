import {
  Alert,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ReactElement } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { type NewProductDto, type ProductDto } from "../../../api/api-types";
import { type ApiError } from "../../../api/apiError";
import { useAppSelector } from "../../../store";
import { api } from "../../../utils/api";
import BaseModal, { type IBaseModalProps } from "../BaseModal";
import Loader from "../../atoms/Loader/Loader";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const NewProductModal = ({ open, onClose }: TProps): ReactElement => {
  const navigate = useNavigate();
  const labels = useAppSelector((state) => state.labelsReducer.labels);

  const { register, setValue, handleSubmit } = useForm<NewProductDto>();

  const { mutate, isLoading, error } = useMutation<
    AxiosResponse<ProductDto>,
    AxiosError<ApiError>,
    NewProductDto
  >(async (form) => await api.post<ProductDto>("/products", form), {
    onSuccess: (data) => {
      navigate(`/panel/products/${data.data._id}`);
    },
  });

  const handleChange = (event: SelectChangeEvent): void => {
    setValue("label", event.target.value);
  };

  const handleCreateNewProduct: SubmitHandler<NewProductDto> = (form) => {
    mutate(form);
  };

  return (
    <BaseModal title='New Product' onClose={onClose} open={open}>
      <>
        {isLoading && <Loader />}
        {!isLoading && (
          <form onSubmit={handleSubmit(handleCreateNewProduct)}>
            <Grid container gap={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='label'>Select label</InputLabel>
                  <Select
                    labelId='label'
                    label='Select label'
                    fullWidth
                    {...register("label", { required: true })}
                    onChange={handleChange}>
                    {labels.map((l) => (
                      <MenuItem key={l._id} value={l._id}>
                        {l.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Product Name'
                  fullWidth
                  {...register("name", { required: true, minLength: 3 })}
                />
              </Grid>
              {error?.response && (
                <Grid item xs={12}>
                  <Alert severity='error'>{error.response.data.message}</Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Add New Product
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default NewProductModal;
