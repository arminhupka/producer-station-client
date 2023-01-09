import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthRoute from "./routes/AuthRoute";
import DashboardView from "./views/DashboardView";
import LabelDetails from "./views/LabelDetails";
import LabelsView from "./views/LabelsView";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";
import RegisterView from "./views/RegisterView";
import ResetPasswordView from "./views/ResetPasswordView";

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path='/panel' element={<DashboardView />} />
        <Route path='/panel/labels' element={<LabelsView />} />
        <Route path='/panel/labels/:id' element={<LabelDetails />} />
      </Route>
      <Route path='/register' element={<RegisterView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/' element={<LoginView />} />
      <Route path='/reset-password' element={<ResetPasswordView />} />
      <Route path='/*' element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
