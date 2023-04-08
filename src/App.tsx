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

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path='/panel' element={<DashboardView />} />
        <Route path='/panel/labels' element={<LabelsView />} />
        <Route path='/panel/labels/:id' element={<LabelDetailsView />} />
        <Route path='/panel/products' element={<ProductsView />} />
        <Route path='/panel/products/:id' element={<ProductDetailsView />} />
      </Route>
      <Route path='/' element={<LoginView />} />
      <Route path='/register' element={<RegisterView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/reset-password' element={<ResetPasswordView />} />
      <Route path='/test' element={<h1>TEST</h1>} />
      <Route path='/*' element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
