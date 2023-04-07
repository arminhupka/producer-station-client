import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ReactElement } from "react";
import { Helmet } from "react-helmet";
import { FormProvider, useForm } from "react-hook-form";
import { FiDollarSign } from "react-icons/fi";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import {
  type UpdateLabelDto,
  type VendorLabelDetailsResponseDto,
} from "../api/api";
import { type ApiError } from "../api/apiError";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import LabelForm from "../components/Forms/LabelForm/LabelForm";
import PageHeading from "../components/PageHeading/PageHeading";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";
import { UpdateLabelValidator } from "../validators/LabelUpdateValidation";
import FullLoader from "../components/atoms/FullLoader/FullLoader";

export const LabelDetailsView = (): ReactElement => {
  const navigate = useNavigate();

  const { id } = useParams();

  if (id === undefined) {
    navigate("/labels");
    return <></>;
  }

  const { isLoading, data: resp } = useQuery<
    AxiosResponse<VendorLabelDetailsResponseDto>,
    AxiosError<ApiError>
  >(
    "get-label",
    async () =>
      await api.get<VendorLabelDetailsResponseDto>(`/vendor/labels/${id}`),
  );

  const methods = useForm<UpdateLabelDto>({
    resolver: yupResolver(UpdateLabelValidator),
    mode: "onChange",
  });

  if (isLoading && !resp) {
    return <FullLoader />;
  }

  if (!isLoading && resp) {
    return (
      <>
        <Helmet>
          <title>{`${resp.data.name} | ${
            process.env.REACT_APP_TITLE as string
          }`}</title>
        </Helmet>
        <MainLayout>
          <PageHeading title={resp.data.name}>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant='outlined'>Update Label</Button>
              </Grid>
              <Grid item>
                <Button variant='contained'>Submit</Button>
              </Grid>
            </Grid>
          </PageHeading>
          <Box mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={3}>
                <DashboardCard
                  title='Commission'
                  value={`${resp.data.commissionRate}%`}
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
            <LabelForm data={resp.data} />
          </FormProvider>
        </MainLayout>
      </>
    );
  }

  return <></>;
};

export default LabelDetailsView;
