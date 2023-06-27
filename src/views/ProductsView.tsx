import { Button } from "@mui/material";
import { type ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NewProductModal from "../components/Modals/NewProductModal/NewProductModal";
import Pagination from "../components/molecules/Pagination/Pagination";
import PageHeading from "../components/PageHeading/PageHeading";
import ProductsTable from "../components/Tabels/ProductsTable/ProductsTable";
import useModalState from "../hooks/useModalState";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/atoms/SearchBar/SearchBar";
import { getProductsListAsVendor } from "../api/products";

const ProductsView = (): ReactElement => {
  const { onOpen, isOpen, onClose } = useModalState();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState<string>("");

  const { isLoading, data, refetch, isRefetching } = getProductsListAsVendor(
    page,
    keyword,
    {
      enabled: false,
    },
  );

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage + 1);
  };

  useEffect(() => {
    void refetch();
  }, [keyword]);

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
        <SearchBar onInputChange={setKeyword} />
        <ProductsTable
          isLoading={isLoading || isRefetching}
          data={data?.docs ?? []}
        />
        {data && (
          <Pagination
            count={data.totalDocs}
            page={data.page}
            rowsPerPage={data.limit}
            onPageChange={handleChangePage}
          />
        )}
      </MainLayout>
    </>
  );
};

export default ProductsView;
