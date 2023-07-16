import { type ReactElement } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Helmet } from "react-helmet";
import PageHeading from "../../components/PageHeading/PageHeading";
import FullLoader from "../../components/atoms/FullLoader/FullLoader";
import { getFiles } from "../../api/files";
import FilesTable from "../../components/Tabels/FilesTable/FilesTable";

const AdminFilesView = (): ReactElement => {
  const { isLoading, data } = getFiles();

  return (
    <>
      <Helmet>
        <title>Files | Producer Station</title>
      </Helmet>
      <MainLayout>
        {isLoading && <FullLoader />}
        <PageHeading title='Files' />
        <FilesTable data={data?.docs ?? []} isLoading={isLoading} />
      </MainLayout>
    </>
  );
};

export default AdminFilesView;
