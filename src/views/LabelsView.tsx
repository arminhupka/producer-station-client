import { Button } from "@mui/material";
import { AxiosResponse } from "axios";
import { ReactElement, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";

import { VendorLabelResponseDto } from "../api/api";
import PageHeading from "../components/PageHeading/PageHeading";
import LabelsTable from "../components/Tabels/LabelsTable/LabelsTable";
import useModalState from "../hooks/useModalState";
import MainLayout from "../layouts/MainLayout";
import { api } from "../utils/api";

const LabelsView = (): ReactElement => {
  const { onOpen } = useModalState();

  const { isLoading, data, remove } = useQuery<
    AxiosResponse<VendorLabelResponseDto[]>
  >(
    "labels",
    async () => await api.get<VendorLabelResponseDto[]>("/vendor/labels"),
  );

  useEffect(() => {
    return () => remove();
  }, []);

  return (
    <>
      <Helmet>
        <title>Labels | ProducerStation</title>
      </Helmet>
      <MainLayout>
        {/* <NewLabelModal onClose={onClose} open={isOpen} /> */}
        <PageHeading title='Labels'>
          <Button variant='contained' onClick={onOpen}>
            Add Labels
          </Button>
        </PageHeading>

        <LabelsTable
          data={!isLoading && data ? data.data : []}
          isLoading={isLoading}
        />
      </MainLayout>
    </>
  );
};

export default LabelsView;
