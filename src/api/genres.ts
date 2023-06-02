import { useQuery, type UseQueryResult } from "react-query";
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
