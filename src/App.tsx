import type { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthRoute from "./routes/AuthRoute";
import DashboardView from "./views/DashboardView";
import LabelDetailsView from "./views/LabelDetailsView";
import LabelsView from "./views/LabelsView";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";
import ProductsView from "./views/ProductsView";
import RegisterView from "./views/RegisterView";
import ResetPasswordView from "./views/ResetPasswordView";
import ProductDetailsView from "./views/ProductDetailsView";
import OrdersView from "./views/OrdersView";
import AdminCategoriesView from "./views/AdminCategoriesView/AdminCategoriesView";
import AdminGenresView from "./views/AdminGenresView/AdminGenresView";
import AdminFilesView from "./views/AdminFilesView/AdminFilesView";
import AdminFormatsView from "./views/AdminFormatsView/AdminFormatsView";

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path='/panel' element={<DashboardView />} />
        <Route path='/panel/labels' element={<LabelsView />} />
        <Route path='/panel/labels/:id' element={<LabelDetailsView />} />
        <Route path='/panel/products' element={<ProductsView />} />
        <Route path='/panel/products/:id' element={<ProductDetailsView />} />
        <Route path='/panel/orders' element={<OrdersView />} />
        <Route
          path='/panel/admin/categories'
          element={<AdminCategoriesView />}
        />
        <Route path='/panel/admin/genres' element={<AdminGenresView />} />
        <Route path='/panel/admin/files' element={<AdminFilesView />} />
        <Route path='/panel/admin/formats' element={<AdminFormatsView />} />
      </Route>
      <Route path='/' element={<LoginView />} />
      <Route path='/register' element={<RegisterView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/reset-password' element={<ResetPasswordView />} />
      <Route path='/*' element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
