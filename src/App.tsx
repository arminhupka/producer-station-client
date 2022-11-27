import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthRoute from "./routes/AuthRoute";
import DashboardView from "./views/DashboardView";
import LabelsView from "./views/LabelsView";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";
import ProductDetailsView from "./views/ProductDetailsView";
import ProductsView from "./views/ProductsView";
import RegisterView from "./views/RegisterView";
import ResetPasswordView from "./views/ResetPasswordView";

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/panel'
        element={
          <AuthRoute>
            <DashboardView />
          </AuthRoute>
        }
      />
      <Route
        path='/panel/products'
        element={
          <AuthRoute>
            <ProductsView />
          </AuthRoute>
        }
      />
      <Route
        path='/panel/product/:id'
        element={
          <AuthRoute>
            <ProductDetailsView />
          </AuthRoute>
        }
      />
      <Route
        path='/panel/labels'
        element={
          <AuthRoute>
            <LabelsView />
          </AuthRoute>
        }
      />
      <Route path='/register' element={<RegisterView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/reset-password' element={<ResetPasswordView />} />
      <Route path='/*' element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
