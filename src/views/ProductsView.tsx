import { Button, CircularProgress, Grid } from "@mui/material";
import { AxiosResponse } from "axios";
import { ReactElement, useEffect } from "react";
import { useQuery } from "react-query";

import { VendorProductListResponseDto } from "../api/api";
import BaseModal from "../components/Modals/BaseModal";
import PageHeading from "../components/PageHeading/PageHeading";
import Tabel from "../components/Tabel/Tabel";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";

const ProductsView = (): ReactElement => {
  const {
    isLoading,
    data: productsData,
    remove,
  } = useQuery<AxiosResponse<VendorProductListResponseDto>>(
    "products",
    async () => await api.get<VendorProductListResponseDto>("/vendor/products", { withCredentials: true }),
  );

  useEffect(() => {
    return () => remove();
  }, []);

  return (
    <MainLayout>
      <BaseModal open title='Base modal' onClose={() => null}>
        <h1>HELLO</h1>
      </BaseModal>
      <PageHeading title='Products'>
        <Grid container spacing={1}>
          <Grid item>
            <Button variant='contained' size='small'>
              Add New Product
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' size='small'>
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </PageHeading>
      {isLoading && <CircularProgress />}
      {productsData?.data != null && (
        <Tabel
          headings={["Name"]}
          data={productsData.data.docs.map((prop) => ({
            id: prop._id,
            values: [prop._id],
          }))}
        />
      )}
    </MainLayout>
  );
};

export default ProductsView;
