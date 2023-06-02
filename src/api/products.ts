import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQuery,
  type UseQueryResult,
} from "react-query";
import { type ProductDto, type UpdateProductDto } from "./api-types";
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
