import { Button } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { ReactElement, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";

import { VendorProductsListResponseDto } from "../api/api";
import { ApiError } from "../api/apiError";
import NewProductModal from "../components/Modals/NewProductModal/NewProductModal";
import PageHeading from "../components/PageHeading/PageHeading";
import ProductsTable from "../components/Tabels/ProductsTable";
import useModalState from "../hooks/useModalState";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";

const ProductsView = (): ReactElement => {
  const { onOpen, onClose, isOpen } = useModalState();

  const {
    isLoading,
    data: products,
    remove,
  } = useQuery<AxiosResponse<VendorProductsListResponseDto>, AxiosError<ApiError>>(
    "vendor-products",
    async () => await api.get<VendorProductsListResponseDto>("/vendor/products", { withCredentials: true }),
  );

  useEffect(() => {
    return () => remove();
  }, []);

  return (
    <>
      <Helmet>
        <title>Products | ProducerStation</title>
      </Helmet>
      <MainLayout>
        <NewProductModal onClose={onClose} open={isOpen} />
        <PageHeading title='Products'>
          <Button variant='contained' size='small' onClick={onOpen}>
            Add New Product
          </Button>
        </PageHeading>
        <ProductsTable isLoading={isLoading} data={products != null ? products.data.docs : []} />
      </MainLayout>
    </>
  );
};

export default ProductsView;
