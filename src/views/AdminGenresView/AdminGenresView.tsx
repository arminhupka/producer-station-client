import { type ReactElement } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Helmet } from "react-helmet";
import PageHeading from "../../components/PageHeading/PageHeading";
import CategoriesTable from "../../components/Tabels/CategoriesTable/CategoriesTable";
import FullLoader from "../../components/atoms/FullLoader/FullLoader";
import { Button } from "@mui/material";
import useModalState from "../../hooks/useModalState";
import { getGenres } from "../../api/genres";
import NewGenreModal from "../../components/Modals/NewGenreModal/NewGenreModal";

const AdminCategoriesView = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const { isLoading, refetch, data } = getGenres();

  return (
    <>
      <Helmet>
        <title>Genres | Producer Station</title>
      </Helmet>
      <NewGenreModal onClose={onClose} open={isOpen} onRefetch={refetch} />
      <MainLayout>
        {isLoading && <FullLoader />}
        <PageHeading title='Genres'>
          <Button variant='contained' size='small' onClick={onOpen}>
            Add Genre
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
