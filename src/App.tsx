import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ResetPasswordView from "./views/ResetPasswordView";

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/reset-password' element={<ResetPasswordView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
