import { type ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { type UpdateProductDto } from "../api/api-types";
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
import { getGenres } from "../api/genres";
import { getCategories } from "../api/categories";
import { getProductAsVendor, updateProduct } from "../api/products";

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

  const getGenresQuery = getGenres();
  const getCategoriesQuery = getCategories();
  const getProductAsVendorQuery = getProductAsVendor(id);

  const isLoading = [
    getGenresQuery,
    getCategoriesQuery,
    getProductAsVendorQuery,
  ].some((q) => q.isLoading);

  const updateProductMutation = updateProduct(id, {
    onSuccess: async () => {
      getProductAsVendorQuery.remove();
      await getProductAsVendorQuery.refetch();
    },
  });

  const product = getProductAsVendorQuery.data;
  const categories = getCategoriesQuery.data;
  const genres = getGenresQuery.data;

  const mutateError = updateProductMutation.error?.response?.data;

  const handleProductUpdate = async (): Promise<void> => {
    await formMethods.trigger();

    if (Object.keys(formMethods.formState.errors).length) {
      return;
    }

    const form = formMethods.getValues();

    await updateProductMutation.mutateAsync({
      ...form,
      price: (form.price && Math.ceil(+form.price * 100)) ?? null,
      salePrice: (form.salePrice && Math.ceil(+form.salePrice * 100)) ?? null,
    });
  };

  const handleProductSubmit = async (): Promise<void> => {
    updateProductMutation.mutate({ status: ProductStatusEnum.SUBMITTED });
  };

  const handleProductPublish = async (): Promise<void> => {
    updateProductMutation.mutate({ status: ProductStatusEnum.ACTIVE });
  };

  const handleProductSuspend = async (): Promise<void> => {
    updateProductMutation.mutate({ status: ProductStatusEnum.SUSPENDED });
  };

  const handleProductRefetch = async (): Promise<void> => {
    await getProductAsVendorQuery.refetch();
  };

  if (isLoading) {
    return <FullLoader />;
  }

  return (
    <>
      {updateProductMutation.isLoading && <FullLoader />}
      <Helmet>
        <title>{`${product?.name ?? ""} | ${
          process.env.REACT_APP_TITLE as string
        }`}</title>
      </Helmet>
      {product && categories && genres && (
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
              genres={getGenresQuery.data}
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
