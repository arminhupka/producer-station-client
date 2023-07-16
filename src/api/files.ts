import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "react-query";
import { api } from "../utils/api";
import { type GetFilesResponseDto } from "./api-types";
import { type AxiosError } from "axios";
import { type ApiError } from "./apiError";

export const getFiles = (
  options?: UseQueryOptions<GetFilesResponseDto, AxiosError<ApiError>>,
): UseQueryResult<GetFilesResponseDto, AxiosError<ApiError>> =>
  useQuery<GetFilesResponseDto, AxiosError<ApiError>>(
    "get-files",
    async () => {
      const { data } = await api.get<GetFilesResponseDto>("/files");
      return data;
    },
    options,
  );
