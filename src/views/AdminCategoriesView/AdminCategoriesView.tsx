import { type ReactElement } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Helmet } from "react-helmet";
import PageHeading from "../../components/PageHeading/PageHeading";
import CategoriesTable from "../../components/Tabels/CategoriesTable/CategoriesTable";
import FullLoader from "../../components/atoms/FullLoader/FullLoader";
import { Button } from "@mui/material";
import useModalState from "../../hooks/useModalState";
import NewCategoryModal from "../../components/Modals/NewCategoryModal/NewCategoryModal";
import { getCategories } from "../../api/categories";

const AdminCategoriesView = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const { isLoading, refetch, data } = getCategories();

  return (
    <>
      <Helmet>
        <title>Categories | Producer Station</title>
      </Helmet>
      <NewCategoryModal onClose={onClose} open={isOpen} onRefetch={refetch} />
      <MainLayout>
        {isLoading && <FullLoader />}
        <PageHeading title='Categories'>
          <Button variant='contained' size='small' onClick={onOpen}>
            Add Category
          </Button>
        </PageHeading>
        {!isLoading && data && (
          <CategoriesTable
            data={data}
            isLoading={isLoading}
            onRefetch={refetch}
          />
        )}
      </MainLayout>
    </>
  );
};

export default AdminCategoriesView;
