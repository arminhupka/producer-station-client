// import type { ReactElement, SyntheticEvent } from "react";
// import { useState } from "react";
// import { TabContext, TabPanel } from "@mui/lab";
// import ProductFormTabs from "./ProductFormTabs/ProductFormTabs";
// import { type ProductDto } from "../../../api/api-types";
// import ProductFilesTab from "./ProductFilesTab/ProductFilesTab";
//
// interface IProps {
//   product: ProductDto;
// }
//
// const ProductForm = ({ product }: IProps): ReactElement => {
//   const [currentTab, setCurrentTab] = useState<string>("1");
//
//   const handleChangeTab = (event: SyntheticEvent, newValue: string): void => {
//     setCurrentTab(newValue);
//   };
//
//   return (
//     <>
//       <TabContext value={currentTab}>
//         <ProductFormTabs onTabChange={handleChangeTab} />
//         <TabPanel value='1'>
//           <h1>Product form</h1>
//         </TabPanel>
//         <TabPanel value='3'>
//           <ProductFilesTab />
//         </TabPanel>
//       </TabContext>
//     </>
//   );
// };
//
// export default ProductForm;

/* eslint-disable */

import { AttachMoney, MoneyOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import {
  CategoryDto,
  ProductDto,
  UpdateProductDto,
} from "../../../api/api-types";
import useModalState from "../../../hooks/useModalState";
import FileUploader from "../../FileUploader/FileUploader";
import NewFileUpload from "../../Modals/NewFileUpload/NewFileUpload";
import { formatPrice } from "../../../utils/formatPrice";

interface IProps {
  product: ProductDto;
  categories: CategoryDto[];
  onUpdate: (update: UpdateProductDto) => void;
  isUpdating: boolean;
}

interface IForm {
  price: string | number | null;
  salePrice: string | number | null;
  category: CategoryDto[];
}

// export interface IProductUpdate
//   extends Omit<UpdateProductDto, "price" | "salePrice"> {
//   price: string | number | null;
//   salePrice: string | number | null;
// }

const ProductForm = ({
  product,
  categories,
  onUpdate,
  isUpdating,
}: IProps): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const [categoryIsFull, setCategoryIsFull] = useState<boolean>(false);

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<UpdateProductDto>();

  useEffect(() => {
    setValue("name", product.name);
    setValue("price", product.price ? formatPrice(product.price) : null);
    setValue(
      "salePrice",
      product.salePrice ? formatPrice(product.salePrice) : null,
    );
    setValue("shortDescription", product.shortDescription);
    setValue("description", product.description);
  }, []);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <NewFileUpload onClose={onClose} open={isOpen} />
      <Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={4}
            display='flex'
            flexDirection='column'
            gap={2}>
            {/* <CoverUploader /> */}
            <Card>
              <Box
                p={2}
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
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
                    <TextField
                      label='Product Name'
                      fullWidth
                      {...register("name")}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label='Label'
                      fullWidth
                      value={product.label.name}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label='Free Product'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='Price'
                      fullWidth
                      error={!!errors.price}
                      helperText={errors.price?.message}
                      // disabled={!!watchIsFree}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AttachMoney />
                          </InputAdornment>
                        ),
                      }}
                      {...register("price", {
                        // pattern: /^\d+\.\d{2}$/,
                        // setValueAs: (v: number) => {
                        //   return Math.ceil(v * 100) || null;
                        // },
                      })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='Sale Price'
                      fullWidth
                      error={!!errors.salePrice}
                      helperText={errors.salePrice?.message}
                      // disabled={!!watchIsFree}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <MoneyOff />
                          </InputAdornment>
                        ),
                      }}
                      {...register("salePrice", {
                        // setValueAs: (v: number) => v * 100 || null,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* <Controller */}
                    {/*   defaultValue={product.category} */}
                    {/*   render={(props) => ( */}
                    {/*     <Autocomplete */}
                    {/*       {...props} */}
                    {/*       onChange={(event, value) => { */}
                    {/*         console.log(value); */}
                    {/*         setCategoryIsFull(value.length === 5); */}
                    {/*         props.field.onChange(value); */}
                    {/*       }} */}
                    {/*       multiple */}
                    {/*       value={props.field.value} */}
                    {/*       getOptionDisabled={(option) => categoryIsFull} */}
                    {/*       getOptionLabel={(option) => option.name} */}
                    {/*       renderOption={(props, option, { selected }) => ( */}
                    {/*         <li {...props} key={option._id}> */}
                    {/*           <Checkbox */}
                    {/*             style={{ marginRight: 8 }} */}
                    {/*             checked={selected} */}
                    {/*           /> */}
                    {/*           {option.name} */}
                    {/*         </li> */}
                    {/*       )} */}
                    {/*       renderInput={(param) => ( */}
                    {/*         <TextField {...param} label='Categories' /> */}
                    {/*       )} */}
                    {/*       options={categories} */}
                    {/*       isOptionEqualToValue={(option, value) => */}
                    {/*         option._id === value._id */}
                    {/*       } */}
                    {/*     /> */}
                    {/*   )} */}
                    {/*   name='category' */}
                    {/*   control={control} */}
                    {/* /> */}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label='Short Description'
                      multiline
                      rows={3}
                      fullWidth
                      {...register("shortDescription")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label='Description'
                      multiline
                      rows={8}
                      fullWidth
                      {...register("description")}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    display='flex'
                    justifyContent='flex-end'
                    gap={2}>
                    <Button variant='outlined' type='submit'>
                      Update Product
                    </Button>
                    <Button variant='contained'>Submit Product</Button>
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
