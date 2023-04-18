import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Button, Grid } from "@mui/material";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ReactElement } from "react";
import { Helmet } from "react-helmet";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { FiDollarSign } from "react-icons/fi";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import type {
  LabelDto,
  UpdateLabelDto,
  VendorLabelDetailsResponseDto,
} from "../api/api-types";
import { type ApiError } from "../api/apiError";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import LabelForm from "../components/Forms/LabelForm/LabelForm";
import PageHeading from "../components/PageHeading/PageHeading";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";
import { UpdateLabelValidator } from "../validators/LabelUpdateValidation";
import FullLoader from "../components/atoms/FullLoader/FullLoader";
import { LabelStatusEnum } from "../enum/LabelStatusEnum";

export const LabelDetailsView = (): ReactElement => {
  const navigate = useNavigate();

  const { id } = useParams();

  if (id === undefined) {
    navigate("/labels");
    return <></>;
  }

  const query = useQuery<
    AxiosResponse<VendorLabelDetailsResponseDto>,
    AxiosError<ApiError>
  >(
    "get-label",
    async () =>
      await api.get<VendorLabelDetailsResponseDto>(`/vendor/labels/${id}`),
  );

  const mutation = useMutation<
    AxiosResponse<LabelDto>,
    AxiosError<ApiError>,
    UpdateLabelDto
  >(async (form) => await api.patch(`/labels/${id}`, form), {
    onSuccess: async () => {
      await query.refetch();
    },
  });

  const handleUpdate: SubmitHandler<UpdateLabelDto> = (form): void => {
    mutation.mutate(form);
  };

  const handleSubmit = (): void => {
    mutation.mutate({
      status: LabelStatusEnum.Submitted,
    });
  };

  const methods = useForm<UpdateLabelDto>({
    resolver: yupResolver(UpdateLabelValidator),
    mode: "onChange",
  });

  const disableEdit = query.data?.data.status !== "Draft";

  if (query.isLoading || mutation.isLoading) {
    return <FullLoader />;
  }

  if (query.data) {
    return (
      <>
        <Helmet>
          <title>{`${query.data.data.name} | ${
            process.env.REACT_APP_TITLE as string
          }`}</title>
        </Helmet>
        <MainLayout>
          {mutation.error && (
            <Alert severity='error' sx={{ marginBottom: 2 }}>
              {mutation.error.response?.data.message}
            </Alert>
          )}
          <p>{query.data.data.status}</p>
          <PageHeading title={query.data.data.name}>
            {!disableEdit && (
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant='outlined'
                    onClick={methods.handleSubmit(handleUpdate)}>
                    Update Label
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' onClick={handleSubmit}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            )}
          </PageHeading>
          <Box mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={3}>
                <DashboardCard
                  title='Commission'
                  value={`${query.data.data.commissionRate}%`}
                  icon={<FiDollarSign />}
                  color='red'
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <DashboardCard
                  title='Commission'
                  value={0}
                  icon={<FiDollarSign />}
                  color='red'
                />
              </Grid>{" "}
              <Grid item xs={12} lg={3}>
                <DashboardCard
                  title='Commission'
                  value={0}
                  icon={<FiDollarSign />}
                  color='red'
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <DashboardCard
                  title='Commission'
                  value={0}
                  icon={<FiDollarSign />}
                  color='red'
                />
              </Grid>
            </Grid>
          </Box>
          <FormProvider {...methods}>
            <LabelForm data={query.data.data} disableEdit={disableEdit} />
          </FormProvider>
        </MainLayout>
      </>
    );
  }

  return <></>;
};

export default LabelDetailsView;
