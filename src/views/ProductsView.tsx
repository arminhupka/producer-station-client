import { Button } from "@mui/material";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";

import NewProductModal from "../components/Modals/NewProductModal/NewProductModal";
import PageHeading from "../components/PageHeading/PageHeading";
import useModalState from "../hooks/useModalState";
import MainLayout from "../layouts/MainLayout";

const ProductsView = (): ReactElement => {
  const { onOpen, isOpen, onClose } = useModalState();

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
      </MainLayout>
    </>
  );
};

export default ProductsView;
