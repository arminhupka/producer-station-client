import { type ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import {
  type CategoryDto,
  type ProductDto,
  type UpdateProductDto,
} from "../api/api-types";
import { type ApiError } from "../api/apiError";
import { api } from "../utils/api";
import FullLoader from "../components/atoms/FullLoader/FullLoader";
import { Helmet } from "react-helmet";
import MainLayout from "../layouts/MainLayout";
import ProductForm from "../components/Forms/ProductForm/ProductForm";
import { FormProvider, useForm } from "react-hook-form";
import { Alert, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewProductValidator } from "../validators/NewProductValidator";
import ProductFormButtons from "../components/molecules/ProductFormButtons/ProductFormButtons";
import PageHeading from "../components/PageHeading/PageHeading";
import { ProductStatusEnum } from "../enum/ProductStatusEnum";
import { queryProduct } from "../api/queries";

const ProductDetailsView = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const formMethods = useForm<UpdateProductDto>({
    resolver: yupResolver(NewProductValidator),
  });

  if (!id) {
    navigate("/panel/products");
    return <></>;
  }

  const QueryProductDetails = queryProduct(id);

  const queryCategories = useQuery<
    AxiosResponse<CategoryDto[]>,
    AxiosError<ApiError>
  >("get-categories", async () => await api.get<CategoryDto[]>("/categories"));

  const mutateProduct = useMutation<
    AxiosResponse<ProductDto>,
    AxiosError<ApiError>,
    UpdateProductDto
  >(async (form) => await api.patch<ProductDto>(`/products/${id}`, form), {
    onSuccess: async () => {
      QueryProductDetails.remove();
      await QueryProductDetails.refetch();
    },
  });

  const product = QueryProductDetails?.data?.data;
  const categories = queryCategories?.data?.data;

  const mutateError = mutateProduct.error?.response?.data;

  const handleProductUpdate = async (): Promise<void> => {
    await formMethods.trigger();

    if (Object.keys(formMethods.formState.errors).length) {
      return;
    }

    const form = formMethods.getValues();

    await mutateProduct.mutateAsync({
      ...form,
      price: (form.price && Math.ceil(+form.price * 100)) ?? null,
      salePrice: (form.salePrice && Math.ceil(+form.salePrice * 100)) ?? null,
    });
  };

  const handleProductSubmit = async (): Promise<void> => {
    mutateProduct.mutate({ status: ProductStatusEnum.SUBMITTED });
  };

  const handleProductPublish = async (): Promise<void> => {
    mutateProduct.mutate({ status: ProductStatusEnum.ACTIVE });
  };

  const handleProductSuspend = async (): Promise<void> => {
    mutateProduct.mutate({ status: ProductStatusEnum.SUSPENDED });
  };

  const handleProductRefetch = async (): Promise<void> => {
    await QueryProductDetails.refetch();
  };

  if (QueryProductDetails.isLoading) {
    return <FullLoader />;
  }

  return (
    <>
      {mutateProduct.isLoading && <FullLoader />}
      <Helmet>
        <title>{`${QueryProductDetails?.data?.data.name ?? ""} | ${
          process.env.REACT_APP_TITLE as string
        }`}</title>
      </Helmet>
      {product && categories?.length && (
        <MainLayout>
          <FormProvider {...formMethods}>
            {mutateError && (
              <Box mb={2}>
                <Alert severity='error'>{mutateError.message}</Alert>
              </Box>
            )}
            <PageHeading title={product.name}>
              <ProductFormButtons
                status={product.status}
                onUpdate={handleProductUpdate}
                onSubmit={handleProductSubmit}
                onPublish={handleProductPublish}
                onSuspend={handleProductSuspend}
              />
            </PageHeading>
            <ProductForm
              product={product}
              categories={categories}
              isUpdating={false}
              onUpdate={() => {}}
              onRefetch={handleProductRefetch}
            />
          </FormProvider>
        </MainLayout>
      )}
    </>
  );
};

export default ProductDetailsView;
