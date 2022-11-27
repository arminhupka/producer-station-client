import { AxiosError, AxiosResponse } from "axios";
import { ReactElement, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { CategoryDto, UpdateProductDto, VendorProductDetailsResponseDto } from "../api/api";
import { ApiError } from "../api/apiError";
import ProductForm from "../components/Forms/ProductForm/ProductForm";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";

const ProductDetailsView = (): ReactElement => {
  const { id } = useParams();

  const {
    refetch,
    isLoading,
    remove,
    data: product,
  } = useQuery<AxiosResponse<VendorProductDetailsResponseDto>, AxiosError<ApiError>>(
    "get-product",
    async () =>
      await api.get<VendorProductDetailsResponseDto>(`/vendor/product/${id}`, {
        withCredentials: true,
      }),
    {
      retryOnMount: false,
    },
  );

  const {
    isLoading: categoriesIsLoading,
    refetch: refetchCategories,
    data: categoriesData,
    remove: removeCategories,
  } = useQuery<AxiosResponse<CategoryDto[]>, AxiosError<ApiError>>(
    "get-categories",
    async () => await api.get<CategoryDto[]>("/categories"),
    {
      retryOnMount: false,
    },
  );

  const { mutate, isLoading: isUpdating } = useMutation<
    AxiosResponse<UpdateProductDto>,
    AxiosError<ApiError>,
    UpdateProductDto
  >(
    async ({ description, shortDescription, price, salePrice, isFree, category }) =>
      await api.patch<UpdateProductDto>(
        `/product/${id}`,
        { description, shortDescription, price, salePrice, isFree, category },
        { withCredentials: true },
      ),
  );

  const handleUpdateProduct = (update: UpdateProductDto) => mutate(update);

  useEffect(() => {
    if (id != null) {
      void refetch();
      void refetchCategories();
    }

    return () => {
      remove();
      removeCategories();
    };
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{product != null ? product.data.name : "Loading"} | Producer Station</title>
      </Helmet>
      <MainLayout>
        {isLoading || (categoriesIsLoading && <h1>Loading</h1>)}
        {!isLoading && !categoriesIsLoading && product != null && categoriesData != null && (
          <ProductForm
            product={product.data}
            categories={categoriesData.data}
            onUpdate={handleUpdateProduct}
            isUpdating={isUpdating}
          />
        )}
      </MainLayout>
    </>
  );
};

export default ProductDetailsView;
