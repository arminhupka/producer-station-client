import { AttachMoney, MoneyOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import {
  type ReactElement,
  type SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";

import {
  type CategoryDto,
  type ProductDto,
  type UpdateProductDto,
} from "../../../api/api-types";
import useModalState from "../../../hooks/useModalState";
import NewFileUpload from "../../Modals/NewFileUpload/NewFileUpload";
import { formatPrice } from "../../../utils/formatPrice";
import AutoCompleteChips from "../../molecules/AutoCompleteChips/AutoCompleteChips";
import ImageUploader, {
  AspectEnum,
} from "../../molecules/ImageUploader/ImageUploader";
import useChunkedUploader from "../../../hooks/useChunkedUploader";
import { useMutation } from "react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ApiError } from "../../../api/apiError";
import { api } from "../../../utils/api";
import AudioPreviewUploader from "../../molecules/AudioPreviewUploader/AudioPreviewUploader";
import FullLoader from "../../atoms/FullLoader/FullLoader";
import { TabContext, TabPanel } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import FilesList from "../../molecules/FilesList/FilesList";

interface IProps {
  product: ProductDto;
  categories: CategoryDto[];
  onUpdate?: (update: UpdateProductDto) => void;
  isUpdating: boolean;
  onRefetch: () => void;
  disabled?: boolean;
}

const ProductForm = ({
  product,
  categories,
  onUpdate,
  onRefetch,
  disabled,
}: IProps): ReactElement => {
  const [currentTab, setCurrentTab] = useState<string>("0");
  const { isOpen, onOpen, onClose } = useModalState();
  const { upload, isUploaded, uploadedFileDetails, uploading } =
    useChunkedUploader();

  const productMutation = useMutation<
    AxiosResponse<ProductDto>,
    AxiosError<ApiError>,
    UpdateProductDto
  >(
    async (form) =>
      await api.patch<ProductDto>(`/products/${product._id}`, form),
  );

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<UpdateProductDto>();

  const handleTabChange = (e: SyntheticEvent, value: string): void => {
    setCurrentTab(value);
  };

  useEffect(() => {
    setValue("name", product.name);
    setValue("price", product.price ? formatPrice(product.price) : null);
    setValue(
      "salePrice",
      product.salePrice ? formatPrice(product.salePrice) : null,
    );
    setValue("shortDescription", product.shortDescription);
    setValue("description", product.description);
    setValue(
      "category",
      product.category.map((c) => c._id),
    );
  }, []);

  useEffect(() => {
    if (isUploaded && uploadedFileDetails) {
      void productMutation
        .mutateAsync({ artwork: uploadedFileDetails._id })
        .then(() => {
          if (onRefetch) {
            onRefetch();
          }
        });
    }
  }, [isUploaded, uploadedFileDetails]);

  return (
    <>
      {productMutation.isLoading && <FullLoader />}
      <NewFileUpload
        onClose={onClose}
        open={isOpen}
        productId={product._id}
        onUploaded={onRefetch}
      />
      <Box>
        <TabContext value={currentTab}>
          <Paper elevation={8}>
            <Box p={2}>
              <TabList onChange={handleTabChange}>
                <Tab label='Details' value='0' />l
                <Tab label='Files' value='1' />l
              </TabList>
            </Box>
          </Paper>
          <TabPanel value='0' sx={{ padding: 0, paddingTop: "20px" }}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Box display='flex' flexDirection='column' gap={3}>
                    <ImageUploader
                      aspect={AspectEnum.square}
                      onUpload={upload}
                      defaultImage={product.artwork?.public}
                      isLoading={uploading}
                      title='Artwork'
                    />
                    <AudioPreviewUploader
                      productId={product._id}
                      audioUrl={product.audioPreview?.public}
                      onRefetch={onRefetch}
                    />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Paper
                    sx={{
                      height: "100%",
                      ".MuiPaper-root": { height: "100%" },
                    }}>
                    <Box p={2}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            label='Product Name'
                            fullWidth
                            disabled={disabled}
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
                            disabled={disabled}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position='start'>
                                  <AttachMoney />
                                </InputAdornment>
                              ),
                            }}
                            {...register("price", {})}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label='Sale Price'
                            fullWidth
                            error={!!errors.salePrice}
                            helperText={errors.salePrice?.message}
                            disabled={disabled}
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
                          <AutoCompleteChips
                            data={categories}
                            productCategories={product.category}
                            disabled={disabled}
                            title='Categories'
                            registerAs='category'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <AutoCompleteChips
                            data={categories}
                            productCategories={product.category}
                            disabled={disabled}
                            title='Genres'
                            registerAs='genres'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <AutoCompleteChips
                            data={categories}
                            productCategories={product.category}
                            disabled={disabled}
                            title='Format'
                            registerAs='genres'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <AutoCompleteChips
                            data={categories}
                            productCategories={product.category}
                            disabled={disabled}
                            title='Instruments'
                            registerAs='instruments'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label='Short Description'
                            multiline
                            rows={3}
                            fullWidth
                            disabled={disabled}
                            {...register("shortDescription")}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label='Description'
                            multiline
                            rows={8}
                            fullWidth
                            disabled={disabled}
                            {...register("description")}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value='1' sx={{ padding: 0, paddingTop: "20px" }}>
            <FilesList files={product.files} productId={product._id} />
            <Box mt={2}>
              <Button variant='contained' fullWidth onClick={onOpen}>
                Upload File
              </Button>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default ProductForm;
