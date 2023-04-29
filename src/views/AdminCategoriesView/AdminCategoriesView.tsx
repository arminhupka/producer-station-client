import { type ReactElement } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Helmet } from "react-helmet";
import PageHeading from "../../components/PageHeading/PageHeading";
import CategoriesTable from "../../components/Tabels/CategoriesTable/CategoriesTable";
import { GetCategories } from "../../api/CategoryQueries";
import FullLoader from "../../components/atoms/FullLoader/FullLoader";
import { Button } from "@mui/material";
import useModalState from "../../hooks/useModalState";
import NewCategoryModal from "../../components/Modals/NewCategoryModal/NewCategoryModal";

const AdminCategoriesView = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const categoriesQuery = GetCategories();

  return (
    <>
      <Helmet>
        <title>Categories | Producer Station</title>
      </Helmet>
      <NewCategoryModal
        onClose={onClose}
        open={isOpen}
        onRefetch={categoriesQuery.refetch}
      />
      <MainLayout>
        {categoriesQuery.isLoading && <FullLoader />}
        <PageHeading title='Categories'>
          <Button variant='contained' size='small' onClick={onOpen}>
            Add Category
          </Button>
        </PageHeading>
        {!categoriesQuery.isLoading && categoriesQuery.data?.data && (
          <CategoriesTable
            data={categoriesQuery.data.data}
            isLoading={categoriesQuery.isLoading}
            onRefetch={categoriesQuery.refetch}
          />
        )}
      </MainLayout>
    </>
  );
};

export default AdminCategoriesView;
