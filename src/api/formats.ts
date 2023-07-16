import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQuery,
  type UseQueryResult,
} from "react-query";
import { type CreateFormatDto, type FormatDto } from "./api-types";
import { type AxiosError } from "axios";
import { type ApiError } from "./apiError";
import { api } from "../utils/api";

export const getFormats = (): UseQueryResult<
  FormatDto[],
  AxiosError<ApiError>
> => {
  return useQuery("formats", async () => {
    const { data } = await api.get<FormatDto[]>("/formats");
    return data;
  });
};

export const addFormat = (
  options?: UseMutationOptions<
    FormatDto,
    AxiosError<ApiError>,
    CreateFormatDto
  >,
): UseMutationResult<FormatDto, AxiosError<ApiError>, CreateFormatDto> => {
  return useMutation(async (form) => {
    const { data } = await api.post("/formats", form);
    return data;
  }, options);
};

export const deleteFormat = (
  options?: UseMutationOptions<FormatDto, AxiosError<ApiError>, string>,
): UseMutationResult<FormatDto, AxiosError<ApiError>, string> => {
  return useMutation(async (id) => {
    const { data } = await api.delete(`/formats/${id}`);
    return data;
  }, options);
};
