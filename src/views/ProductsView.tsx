import { Button, CircularProgress, Grid } from "@mui/material";
import { AxiosResponse } from "axios";
import { ReactElement, useEffect } from "react";
import { useQuery } from "react-query";

import { VendorProductListResponseDto } from "../api/api";
import NewProductModal from "../components/Modals/NewProductModal/NewProductModal";
import PageHeading from "../components/PageHeading/PageHeading";
import Tabel from "../components/Tabel/Tabel";
import useModalState from "../hooks/useModalState";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";

const ProductsView = (): ReactElement => {
  const { onOpen, onClose, isOpen } = useModalState();
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
      <NewProductModal onClose={onClose} open={isOpen} />
      <PageHeading title='Products'>
        <Grid container spacing={1}>
          <Grid item>
            <Button variant='contained' size='small' onClick={onOpen}>
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
