import { HTMLAttributes, forwardRef, FC, PropsWithChildren } from "react";
import classnames from "classnames";
import {
  ContactContextDefault,
  ContactContext,
} from "@kickstartds/base/lib/contact";

import { ContactProps } from "./ContactProps";
import "./contact.scss";

export const Contact = forwardRef<
  HTMLAnchorElement,
  ContactProps & HTMLAttributes<HTMLElement>
>(({ name, className, ...props }) => (
  <ContactContextDefault
    {...props}
    className={classnames("dsa-contact", className)}
  />
));
Contact.displayName = "Contact";

export const ContactProvider: FC<PropsWithChildren> = (props) => (
  <ContactContext.Provider {...props} value={Contact} />
);
