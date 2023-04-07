import { ReactElement, ReactNode } from "react";

import FetchingProvider from "./FetchingProvider";

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps): ReactElement => (
  <FetchingProvider>{children}</FetchingProvider>
);

export default Providers;
