import { AttachMoney, MoneyOff } from "@mui/icons-material";
import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ReactElement, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { CategoryDto, UpdateProductDto, VendorProductDetailsResponseDto } from "../../../api/api";
import useModalState from "../../../hooks/useModalState";
import CoverUploader from "../../CoverUploader/CoverUploader";
import FileUploader from "../../FileUploader/FileUploader";
import NewFileUpload from "../../Modals/NewFileUpload/NewFileUpload";

interface IProps {
  product: VendorProductDetailsResponseDto;
  categories: CategoryDto[];
  onUpdate: (update: UpdateProductDto) => void;
  isUpdating: boolean;
}

const ProductForm = ({ product, categories, onUpdate, isUpdating }: IProps): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const { setValue, register, watch, handleSubmit } = useForm<UpdateProductDto>();

  const watchIsFree = watch("isFree");

  const handleFormSubmit: SubmitHandler<UpdateProductDto> = (form) => {
    onUpdate({
      name: form.name,
      description: form.description,
      price: form.price,
      salePrice: form.salePrice,
      isFree: form.isFree,
      shortDescription: form.shortDescription,
    });
  };

  useEffect(() => {
    setValue("name", product.name);
    setValue("price", product.price);
    setValue("salePrice", product.salePrice);
    setValue("shortDescription", product.shortDescription);
    setValue("description", product.description);
    setValue("isFree", product.isFree);
  }, []);

  useEffect(() => {
    if (watchIsFree) {
      setValue("price", null);
      setValue("salePrice", null);
    }
  }, []);

  return (
    <>
      <Backdrop open={isUpdating} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <NewFileUpload onClose={onClose} open={isOpen} />
      <Box component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} display='flex' flexDirection='column' gap={2}>
            <CoverUploader />
            <Card>
              <Box p={2} display='flex' justifyContent='space-between' alignItems='center'>
                <Typography component='h2' fontWeight={600}>
                  Files
                </Typography>
                <Button variant='contained' size='small' onClick={onOpen}>
                  Add File
                </Button>
              </Box>
              <Divider />
              <FileUploader />
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Paper>
              <Box p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <TextField label='Product Name' fullWidth {...register("name")} />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField label='Label' fullWidth value={product.label.name} disabled />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox {...register("isFree")} />} label='Free Product' />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='Price'
                      fullWidth
                      disabled={watchIsFree}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AttachMoney />
                          </InputAdornment>
                        ),
                      }}
                      {...register("price")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='Sale Price'
                      fullWidth
                      disabled={watchIsFree}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <MoneyOff />
                          </InputAdornment>
                        ),
                      }}
                      {...register("salePrice")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      onChange={(e, value) => {
                        const categories = value.map((category) => category._id);
                        setValue("category", categories);
                      }}
                      multiple
                      getOptionLabel={(option) => option.name}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox style={{ marginRight: 8 }} checked={selected} />
                          {option.name}
                        </li>
                      )}
                      renderInput={(param) => <TextField {...param} label='Categories' />}
                      options={categories}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label='Short Description'
                      multiline
                      rows={5}
                      fullWidth
                      {...register("shortDescription")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label='Description' multiline rows={10} fullWidth {...register("description")} />
                  </Grid>
                  <Grid item xs={12} display='flex' justifyContent='flex-end' gap={2}>
                    <Button variant='outlined'>Update Product</Button>
                    <Button type='submit' variant='contained'>
                      Submit Product
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductForm;
