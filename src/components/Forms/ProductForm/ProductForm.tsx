import { ReactElement } from "react";

const ProductForm = (): ReactElement => <h1>Heloo</h1>;

export default ProductForm;
// /* eslint-disable */
//
// import { AttachMoney, MoneyOff } from "@mui/icons-material";
// import {
//   Autocomplete,
//   Backdrop,
//   Box,
//   Button,
//   Card,
//   Checkbox,
//   CircularProgress,
//   Divider,
//   FormControlLabel,
//   Grid,
//   InputAdornment,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { ReactElement, useEffect, useState } from "react";
// import { Controller, SubmitHandler, useForm } from "react-hook-form";
//
// import { CategoryDto, UpdateProductDto, VendorProductDetailsResponseDto } from "../../../api/api";
// import useModalState from "../../../hooks/useModalState";
// import CoverUploader from "../../CoverUploader/CoverUploader";
// import FileUploader from "../../FileUploader/FileUploader";
// import NewFileUpload from "../../Modals/NewFileUpload/NewFileUpload";
// import formatPrice from "../../../utils/formatPrice";
//
// interface IProps {
//   product: VendorProductDetailsResponseDto;
//   categories: CategoryDto[];
//   onUpdate: (update: UpdateProductDto) => void;
//   isUpdating: boolean;
// }
//
// type TUpdateProduct = Pick<UpdateProductDto, "name" | "isFree" | "description" | "shortDescription" | "status">;
//
// interface IForm extends TUpdateProduct {
//   price: string | number | null;
//   salePrice: string | number | null;
//   category: CategoryDto[];
// }
//
// const ProductForm = ({ product, categories, onUpdate, isUpdating }: IProps): ReactElement => {
//   const { isOpen, onOpen, onClose } = useModalState();
//   const { setValue, register, watch, handleSubmit, control } = useForm<IForm>();
//   const [categoryIsFull, setCategoryIsFull] = useState<boolean>(false);
//
//   const watchIsFree = watch("isFree");
//
//   const handleFormSubmit: SubmitHandler<IForm> = (form) => {
//     onUpdate({
//       name: form.name,
//       description: form.description,
//       price: form.price ? +form.price * 100 : null,
//       salePrice: form.salePrice ? +form.salePrice * 100 : null,
//       isFree: form.isFree,
//       shortDescription: form.shortDescription,
//       category: form.category.map((category) => category._id),
//     });
//   };
//
//   useEffect(() => {
//     setValue("name", product.name);
//     setValue("description", product.description);
//     setValue("shortDescription", product.shortDescription);
//     setValue("price", product.price ? formatPrice(product.price).replace("$", "") : null);
//     setValue("salePrice", product.salePrice ? formatPrice(product.salePrice).replace("$", "") : null);
//     setValue("isFree", product.isFree);
//     setValue("category", product.category);
//   }, [product]);
//
//   return (
//     <>
//       <Backdrop open={isUpdating} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <CircularProgress color='inherit' />
//       </Backdrop>
//       <NewFileUpload onClose={onClose} open={isOpen} />
//       <Box component='form'>
//         <Grid container spacing={2}>
//           <Grid item xs={12} lg={4} display='flex' flexDirection='column' gap={2}>
//             <CoverUploader />
//             <Card>
//               <Box p={2} display='flex' justifyContent='space-between' alignItems='center'>
//                 <Typography component='h2' fontWeight={600}>
//                   Files
//                 </Typography>
//                 <Button variant='contained' size='small' onClick={onOpen}>
//                   Add File
//                 </Button>
//               </Box>
//               <Divider />
//               <FileUploader />
//             </Card>
//           </Grid>
//           <Grid item xs={12} lg={8}>
//             <Paper>
//               <Box p={2}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} lg={6}>
//                     <TextField label='Product Name' fullWidth {...register("name")} />
//                   </Grid>
//                   <Grid item xs={12} lg={6}>
//                     <TextField label='Label' fullWidth value={product.label.name} disabled />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControlLabel control={<Checkbox {...register("isFree")} />} label='Free Product' />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <TextField
//                       label='Price'
//                       fullWidth
//                       disabled={!!watchIsFree}
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position='start'>
//                             <AttachMoney />
//                           </InputAdornment>
//                         ),
//                       }}
//                       {...register("price")}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <TextField
//                       label='Sale Price'
//                       fullWidth
//                       disabled={!!watchIsFree}
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position='start'>
//                             <MoneyOff />
//                           </InputAdornment>
//                         ),
//                       }}
//                       {...register("salePrice")}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Controller
//                       defaultValue={product.category}
//                       render={(props) => (
//                         <Autocomplete
//                           {...props}
//                           onChange={(event, value) => {
//                             console.log(value);
//                             setCategoryIsFull(value.length === 5);
//                             props.field.onChange(value);
//                           }}
//                           multiple
//                           value={props.field.value}
//                           getOptionDisabled={(option) => categoryIsFull}
//                           getOptionLabel={(option) => option.name}
//                           renderOption={(props, option, { selected }) => (
//                             <li {...props} key={option._id}>
//                               <Checkbox style={{ marginRight: 8 }} checked={selected} />
//                               {option.name}
//                             </li>
//                           )}
//                           renderInput={(param) => <TextField {...param} label='Categories' />}
//                           options={categories}
//                           isOptionEqualToValue={(option, value) => option._id === value._id}
//                         />
//                       )}
//                       name='category'
//                       control={control}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label='Short Description'
//                       multiline
//                       rows={3}
//                       fullWidth
//                       {...register("shortDescription")}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField label='Description' multiline rows={8} fullWidth {...register("description")} />
//                   </Grid>
//                   <Grid item xs={12} display='flex' justifyContent='flex-end' gap={2}>
//                     <Button variant='outlined' onClick={handleSubmit(handleFormSubmit)}>
//                       Update Product
//                     </Button>
//                     <Button variant='contained'>Submit Product</Button>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };
//
// export default ProductForm;
