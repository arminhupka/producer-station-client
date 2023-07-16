import { type ReactElement } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Helmet } from "react-helmet";
import PageHeading from "../../components/PageHeading/PageHeading";
import CategoriesTable from "../../components/Tabels/CategoriesTable/CategoriesTable";
import FullLoader from "../../components/atoms/FullLoader/FullLoader";
import { Button } from "@mui/material";
import useModalState from "../../hooks/useModalState";
import { getFormats } from "../../api/formats";
import NewFormatModal from "../../components/Modals/NewFormatModal/NewFormatModal";

const AdminFormatsView = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const { isLoading, refetch, data } = getFormats();

  return (
    <>
      <Helmet>
        <title>Formats | Producer Station</title>
      </Helmet>
      <NewFormatModal onClose={onClose} open={isOpen} onRefetch={refetch} />
      <MainLayout>
        {isLoading && <FullLoader />}
        <PageHeading title='Formats'>
          <Button variant='contained' size='small' onClick={onOpen}>
            Add Format
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

export default AdminFormatsView;
