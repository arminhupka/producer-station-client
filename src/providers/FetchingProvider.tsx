import { type AxiosResponse } from "axios";
import { type ReactElement, type ReactNode } from "react";
import { useQuery } from "react-query";

import {
  type GetVendorAllLabelsDto,
  type UserProfileResponseDto,
} from "../api/api";
import { setAllLabels } from "../features/labelsSlice";
import { resetUser, setUser } from "../features/userSlice";
import { useAppDispatch } from "../store";
import { api } from "../utils/api";
import FullyLoader from "../components/atoms/FullLoader/FullLoader";

interface IProps {
  children: ReactNode;
}

const FetchingProvider = ({ children }: IProps): ReactElement => {
  const dispatch = useAppDispatch();

  const vendorLabels = useQuery<AxiosResponse<GetVendorAllLabelsDto[]>>(
    "vendor-labels",
    async () => await api.get<GetVendorAllLabelsDto[]>("/vendor/all-labels"),
    {
      onSuccess: (data) => {
        const sortedData = data.data.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        dispatch(setAllLabels(sortedData));
      },
    },
  );

  const user = useQuery<AxiosResponse<UserProfileResponseDto>>(
    "get-user",
    async () => await api.get<UserProfileResponseDto>("/auth/me"),
    {
      onSuccess: (data) => {
        const role = data.data.role;

        if (role === "USER") {
          dispatch(resetUser());
        } else {
          dispatch(setUser(data.data));
        }
      },
    },
  );

  if (vendorLabels.isLoading || user.isLoading) {
    return <FullyLoader />;
  }

  return <>{children}</>;
};

export default FetchingProvider;
