import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "react-query";
import {
  type AddFileToProductDto,
  type ProductDto,
  type UpdateProductDto,
  type VendorProductsListPaginatedDto,
} from "./api-types";
import { type AxiosError } from "axios";
import { type ApiError } from "./apiError";
import { api } from "../utils/api";

export const getProductAsVendor = (
  id: string,
): UseQueryResult<ProductDto, AxiosError<ApiError>> => {
  return useQuery("vendor-get-product", async () => {
    const { data } = await api.get<ProductDto>(`/vendor/products/${id}`);
    return data;
  });
};

export const updateProduct = (
  id: string,
  options?: UseMutationOptions<
    ProductDto,
    AxiosError<ApiError>,
    UpdateProductDto
  >,
): UseMutationResult<ProductDto, AxiosError<ApiError>, UpdateProductDto> => {
  return useMutation(async (form) => {
    const { data } = await api.patch<ProductDto>(`/products/${id}`, form);
    return data;
  }, options);
};

export const getProductsListAsVendor = (
  page: number,
  keyword: string,
  options: UseQueryOptions<
    VendorProductsListPaginatedDto,
    AxiosError<ApiError>
  >,
): UseQueryResult<VendorProductsListPaginatedDto, AxiosError<ApiError>> =>
  useQuery<VendorProductsListPaginatedDto, AxiosError<ApiError>>(
    "getProductsListAsVendor",
    async () => {
      const { data } = await api.get<VendorProductsListPaginatedDto>(
        "/vendor/products",
        {
          params: {
            page,
            product: keyword || undefined,
          },
        },
      );
      return data;
    },
    options,
  );

export const addFileToProduct = (
  productId: string,
  options: UseMutationOptions<
    ProductDto,
    AxiosError<ApiError>,
    AddFileToProductDto
  >,
): UseMutationResult<ProductDto, AxiosError<ApiError>, AddFileToProductDto> =>
  useMutation(async (form) => {
    const { data } = await api.post<ProductDto>(
      `/products/${productId}/file`,
      form,
    );
    return data;
  }, options);
