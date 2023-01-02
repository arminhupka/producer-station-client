import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { ReactElement, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { UpdateLabelDto, VendorLabelDetailsResponseDto } from "../api/api";
import { ApiError } from "../api/apiError";
import LabelForm from "../components/Forms/LabelForm/LabelForm";
import PageHeading from "../components/PageHeading/PageHeading";
import { LabelStatusEnum } from "../enum/LabelStatusEnum";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";

export const LabelDetails = (): ReactElement => {
  const { id } = useParams();
  const { isLoading, data, remove, refetch } = useQuery<
    AxiosResponse<VendorLabelDetailsResponseDto>,
    AxiosError<ApiError>
  >(
    "get-label",
    async () =>
      await api.get<VendorLabelDetailsResponseDto>(`/vendor/labels/${id}`),
  );

  const {
    mutateAsync,
    isLoading: isUpdating,
    error,
  } = useMutation<
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
  );

  const methods = useForm<UpdateLabelDto>();

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
                <Alert variant='filled' severity='error'>
                  {error.response.data.message}
                </Alert>
              </Box>
            )}
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
