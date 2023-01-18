import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FiDollarSign } from "react-icons/fi";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { UpdateLabelDto, VendorLabelDetailsResponseDto } from "../api/api";
import { ApiError } from "../api/apiError";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import LabelForm from "../components/Forms/LabelForm/LabelForm";
import PageHeading from "../components/PageHeading/PageHeading";
import { LabelStatusEnum } from "../enum/LabelStatusEnum";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";
import { UpdateLabelValidator } from "../validators/LabelUpdateValidation";

export const LabelDetails = (): ReactElement => {
  const [updated, setUpdated] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError<ApiError> | null>(null);

  const { id } = useParams();
  const { isLoading, data, remove, refetch } = useQuery<
    AxiosResponse<VendorLabelDetailsResponseDto>,
    AxiosError<ApiError>
  >(
    "get-label",
    async () =>
      await api.get<VendorLabelDetailsResponseDto>(`/vendor/labels/${id}`),
  );

  const { mutateAsync, isLoading: isUpdating } = useMutation<
    AxiosResponse<VendorLabelDetailsResponseDto>,
    AxiosError<ApiError>,
    UpdateLabelDto
  >(
    async ({
      avatar,
      header,
      name,
      email,
      description,
      status,
      facebook,
      instagram,
      youtube,
    }) =>
      await api.patch<VendorLabelDetailsResponseDto>(`/labels/${id}`, {
        avatar,
        header,
        name,
        email,
        description,
        status,
        facebook,
        instagram,
        youtube,
      }),
    {
      onMutate: () => {
        setError(null);
        setUpdated(false);
      },
      onSuccess: () => {
        setUpdated(true);
      },
      onError: (error) => {
        setError(error);
      },
    },
  );

  const methods = useForm<UpdateLabelDto>({
    resolver: yupResolver(UpdateLabelValidator),
    mode: "onChange",
  });

  const handleLabelUpdate: SubmitHandler<UpdateLabelDto> = async (form) => {
    await mutateAsync({
      name: form.name,
      email: form.email,
      description: form.description,
      facebook: form.facebook,
      instagram: form.instagram,
      youtube: form.youtube,
    });
    await handleRefetch();
  };

  const handleSubmitLabel = async () => {
    await mutateAsync({
      status: LabelStatusEnum.Submitted,
    });
    await handleRefetch();
  };

  const handleRefetch = async () => {
    remove();
    await refetch();
  };

  useEffect(() => {
    return () => remove();
  }, []);

  useEffect(() => {
    if (updated) {
      setTimeout(() => {
        setUpdated(false);
      }, 5000);
    }
  }, [updated]);

  return (
    <>
      <Helmet>
        <title>
          {data != null ? data.data.name : "Loading"} | Producer Station
        </title>
      </Helmet>
      <Backdrop
        open={isUpdating || isLoading}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color='inherit' size={50} />
      </Backdrop>
      <MainLayout>
        {isUpdating && <p>UPDATING</p>}
        {!isLoading && data && (
          <PageHeading title={data.data.name}>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant='outlined'
                  onClick={methods.handleSubmit(handleLabelUpdate)}
                  disabled={data.data.status !== LabelStatusEnum.Draft}>
                  Update Label
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  onClick={handleSubmitLabel}
                  disabled={data.data.status !== LabelStatusEnum.Draft}>
                  {data.data.status === LabelStatusEnum.Draft
                    ? "Submit"
                    : data.data.status}
                </Button>
              </Grid>
            </Grid>
          </PageHeading>
        )}
        {!isLoading && data && (
          <>
            {error?.response && (
              <Box mb={2}>
                <Alert variant='standard' severity='error'>
                  {error.response.data.message}
                </Alert>
              </Box>
            )}
            {updated && (
              <Box mb={2}>
                <Alert variant='standard' severity='success'>
                  Label updated
                </Alert>
              </Box>
            )}
            <Box mb={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={3}>
                  <DashboardCard
                    title='Commission'
                    value={`${data.data.commissionRate}%`}
                    icon={<FiDollarSign />}
                    color='red'
                  />
                </Grid>
                <Grid item xs={12} lg={3}>
                  <DashboardCard
                    title='Commission'
                    value={50}
                    icon={<FiDollarSign />}
                    color='red'
                  />
                </Grid>{" "}
                <Grid item xs={12} lg={3}>
                  <DashboardCard
                    title='Commission'
                    value={50}
                    icon={<FiDollarSign />}
                    color='red'
                  />
                </Grid>
                <Grid item xs={12} lg={3}>
                  <DashboardCard
                    title='Commission'
                    value={50}
                    icon={<FiDollarSign />}
                    color='red'
                  />
                </Grid>
              </Grid>
            </Box>
            <FormProvider {...methods}>
              <LabelForm data={data.data} refetch={handleRefetch} />
            </FormProvider>
          </>
        )}
      </MainLayout>
    </>
  );
};

export default LabelDetails;
