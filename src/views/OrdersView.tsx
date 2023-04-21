import { type ReactElement } from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../layouts/MainLayout";
import PageHeading from "../components/PageHeading/PageHeading";

const OrdersView = (): ReactElement => (
  <>
    <Helmet>
      <title>Products | ProducerStation</title>
    </Helmet>
    <MainLayout>
      <PageHeading title='Orders' />
    </MainLayout>
  </>
);

export default OrdersView;
