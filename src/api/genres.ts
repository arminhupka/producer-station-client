import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQuery,
  type UseQueryResult,
} from "react-query";
import { api } from "../utils/api";
import { type GenreDto } from "./api-types";
import { type AxiosError } from "axios";
import { type ApiError } from "./apiError";

export const getGenres = (): UseQueryResult<
  GenreDto[],
  AxiosError<ApiError>
> => {
  return useQuery("genres", async () => {
    const { data } = await api.get<GenreDto[]>("/genres");
    return data;
  });
};

export const addGenre = (
  options?: UseMutationOptions<GenreDto, AxiosError<ApiError>, string>,
): UseMutationResult<GenreDto, AxiosError<ApiError>, string> => {
  return useMutation(async (name) => {
    const { data } = await api.post<GenreDto>("/genres", { name });
    return data;
  }, options);
};
