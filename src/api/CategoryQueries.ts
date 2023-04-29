import { useQuery, type UseQueryResult } from "react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { type CategoryDto, type CreateCategoryDto } from "./api-types";
import { api } from "../utils/api";
import { type ApiError } from "./apiError";

export const GetCategories = (): UseQueryResult<AxiosResponse<CategoryDto[]>> =>
  useQuery<AxiosResponse<CategoryDto[]>, AxiosError<ApiError>>(
    "get-categories",
    async () => await api.get<CategoryDto[]>("/categories"),
  );

export const AddCategory = async (
  form: CreateCategoryDto,
): Promise<CategoryDto> => {
  const { data } = await api.post<CategoryDto>("/categories", form);
  return data;
};

export const DeleteCategory = async (
  categoryId: string,
): Promise<CategoryDto> => {
  const { data } = await api.delete(`/categories/${categoryId}`);
  return data;
};
