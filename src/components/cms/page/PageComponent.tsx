import { PageProps } from "../PageProps";
import { FC, PropsWithChildren } from "react";

export { PageProps };

export const Page: FC<PropsWithChildren<PageProps>> = ({ children }) => (
  <>{children}</>
);
Page.displayName = "Page";
