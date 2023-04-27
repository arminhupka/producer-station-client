import { useQuery, type UseQueryResult } from "react-query";
import { type AxiosError, type AxiosResponse } from "axios/index";
import { type ProductDto } from "./api-types";
import { type ApiError } from "./apiError";
import { api } from "../utils/api";

export const queryProduct = (
  id: string,
): UseQueryResult<AxiosResponse<ProductDto>> =>
  useQuery<AxiosResponse<ProductDto>, AxiosError<ApiError>>(
    "get-product",
    async () => await api.get<ProductDto>(`/vendor/products/${id}`),
  );
