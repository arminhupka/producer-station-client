import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQuery,
  type UseQueryResult,
} from "react-query";
import { type CategoryDto, type CreateCategoryDto } from "./api-types";
import { type AxiosError } from "axios";
import { type ApiError } from "./apiError";
import { api } from "../utils/api";

export const getCategories = (): UseQueryResult<
  CategoryDto[],
  AxiosError<ApiError>
> => {
  return useQuery("categories", async () => {
    const { data } = await api.get<CategoryDto[]>("/categories");
    return data;
  });
};

export const deleteCategory = (
  options?: UseMutationOptions<CategoryDto, AxiosError<ApiError>, string>,
): UseMutationResult<CategoryDto, AxiosError<ApiError>, string> => {
  return useMutation(async (id) => {
    const { data } = await api.delete<CategoryDto>(`/categories/${id}`);
    return data;
  }, options);
};

export const addCategory = (
  options?: UseMutationOptions<
    CategoryDto,
    AxiosError<ApiError>,
    CreateCategoryDto
  >,
): UseMutationResult<CategoryDto, AxiosError<ApiError>, CreateCategoryDto> => {
  return useMutation(async (form) => {
    const { data } = await api.post<CategoryDto>(`/categories`, form);
    return data;
  }, options);
};
