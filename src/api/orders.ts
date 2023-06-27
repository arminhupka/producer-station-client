import { type UseQueryResult, useQuery } from "react-query";
import { type OrderVendorListItem } from "./api-types";
import { type AxiosError } from "axios";
import { type ApiError } from "./apiError";
import { api } from "../utils/api";

export const getOrders = (
  options?: UseQueryResult<OrderVendorListItem[], AxiosError<ApiError>>,
): UseQueryResult<OrderVendorListItem[]> =>
  useQuery("vendor-get-orders", async () => {
    const { data } = await api.get<OrderVendorListItem[]>("/vendor/orders", {
      withCredentials: true,
    });
    return data;
  });
