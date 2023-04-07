import { Button } from "@mui/material";
import { type AxiosResponse } from "axios";
import { type ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";

import { type VendorProductsListPaginatedDto } from "../api/api";
import NewProductModal from "../components/Modals/NewProductModal/NewProductModal";
import Pagination from "../components/molecules/Pagination/Pagination";
import PageHeading from "../components/PageHeading/PageHeading";
import ProductsTable from "../components/Tabels/ProductsTable/ProductsTable";
import useModalState from "../hooks/useModalState";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";

const ProductsView = (): ReactElement => {
  const { onOpen, isOpen, onClose } = useModalState();
  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery<
    AxiosResponse<VendorProductsListPaginatedDto>
  >(
    ["products", page],
    async () =>
      await api.get<VendorProductsListPaginatedDto>("/vendor/products", {
        params: { limit: 10, page },
      }),
  );

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage + 1);
  };

  return (
    <>
      <Helmet>
        <title>Products | ProducerStation</title>
      </Helmet>
      <MainLayout>
        <NewProductModal onClose={onClose} open={isOpen} />
        <PageHeading title='Products'>
          <Button variant='contained' onClick={onOpen}>
            Add Product
          </Button>
        </PageHeading>
        <ProductsTable isLoading={isLoading} data={data?.data.docs ?? []} />
        {data != null && (
          <Pagination
            count={data.data.totalDocs}
            page={data.data.page}
            rowsPerPage={data.data.limit}
            onPageChange={handleChangePage}
          />
        )}
      </MainLayout>
    </>
  );
};

export default ProductsView;
