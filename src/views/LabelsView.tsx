import { Button } from "@mui/material";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";

import NewLabelModal from "../components/Modals/NewLabelModal/NewLabelModal";
import PageHeading from "../components/PageHeading/PageHeading";
import useModalState from "../hooks/useModalState";
import MainLayout from "../layouts/MainLayout";

const LabelsView = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();

  return (
    <>
      <Helmet>
        <title>Labels | ProducerStation</title>
      </Helmet>
      <MainLayout>
        <NewLabelModal onClose={onClose} open={isOpen} />
        <PageHeading title='Labels'>
          <Button variant='contained' onClick={onOpen}>
            Add Labels
          </Button>
        </PageHeading>
      </MainLayout>
    </>
  );
};

export default LabelsView;
