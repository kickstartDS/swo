import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";
import { ContactProps } from "./ContactProps";
import "./contact.scss";
import { Picture } from "@kickstartds/base/lib/picture";
import { ContactContext } from "@kickstartds/base/lib/contact";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { RichText } from "@kickstartds/base/lib/rich-text";

export const Contact = forwardRef<
  HTMLAnchorElement,
  ContactProps & HTMLAttributes<HTMLElement>
>(({ title, subtitle, image, links, copy, className, ...props }, ref) => (
  <address
    className={classnames("dsa-contact", className)}
    ref={ref}
    {...props}
  >
    {image && image.src ? (
      <div className="dsa-contact__image">
        <Picture {...image} />
      </div>
    ) : (
      ""
    )}
    <div className="dsa-contact__body">
      {title && (
        <div className="dsa-contact__header">
          <span className="dsa-contact__title">{title}</span>
          <span className="dsa-contact__subtitle">{subtitle}</span>
        </div>
      )}
      {links.length ? (
        <ul className="dsa-contact__links">
          {links.map(({ icon, href, label, newTab }, i) => (
            <li key={i}>
              <Link
                className="dsa-contact__link"
                href={href}
                {...(newTab ? { target: "_blank", rel: "noopener" } : {})}
              >
                <Icon icon={icon} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      {copy && <RichText text={copy} className="dsa-contact__copy" />}
    </div>
  </address>
));
Contact.displayName = "Contact";

export const ContactProvider: FC<PropsWithChildren> = (props) => (
  <ContactContext.Provider {...props} value={Contact} />
);
