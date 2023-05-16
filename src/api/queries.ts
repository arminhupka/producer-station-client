import { useQuery, type UseQueryResult } from "react-query";
import { type AxiosError, type AxiosResponse } from "axios/index";
import {
  type OkResponseDto,
  type OrderListItemDto,
  type ProductDto,
  type RegisterVendorDto,
  type UpdateProductDto,
} from "./api-types";
import { type ApiError } from "./apiError";
import { api } from "../utils/api";

export const queryProduct = (
  id: string,
): UseQueryResult<AxiosResponse<ProductDto>> =>
  useQuery<AxiosResponse<ProductDto>, AxiosError<ApiError>>(
    "get-product",
    async () => await api.get<ProductDto>(`/vendor/products/${id}`),
  );

export const handleDownloadFile = (
  id: string,
): UseQueryResult<AxiosResponse<string>> =>
  useQuery<AxiosResponse<string>>(
    "download-file",
    async () => await api.get<string>(`/files/${id}/download`),
  );

export const updateProduct = async (
  productId: string,
  form: UpdateProductDto,
): Promise<ProductDto> => {
  const { data } = await api.patch<ProductDto>(`/products/${productId}`, form);
  return data;
};

export const RegisterVendor = async (
  form: RegisterVendorDto,
): Promise<OkResponseDto> => {
  const { data } = await api.post<OkResponseDto>("/users/vendor", form);
  return data;
};

export const GetOrders = async (): Promise<OrderListItemDto[]> => {
  const { data } = await api.get<OrderListItemDto[]>("/vendor/orders");
  return data;
};
