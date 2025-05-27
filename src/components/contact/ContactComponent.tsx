import {
  HTMLAttributes,
  FC,
  PropsWithChildren,
  forwardRef,
  createContext,
  useContext,
} from "react";
import classnames from "classnames";
import { ContactProps } from "./ContactProps";
import "./contact.scss";
import { Picture } from "@kickstartds/base/lib/picture";
import { ContactContext as KdsContactContext } from "@kickstartds/base/lib/contact";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Container } from "@kickstartds/core/lib/container";

export type { ContactProps };

export const ContactContextDefault = forwardRef<
  HTMLElement,
  ContactProps & HTMLAttributes<HTMLElement>
>(({ title, subtitle, image, links, copy, className, ...props }, ref) => (
  <Container name="contact">
    <address
      className={classnames(
        "swo-contact",
        image?.aspectRatio && `swo-contact--image-${image?.aspectRatio}`,
        image?.fullWidth && `swo-contact--image-full-width`,
        className
      )}
      ref={ref}
      {...props}
    >
      {image && image.src && (
        <div className="swo-contact__image-wrap">
          <Picture
            src={image?.src}
            alt={image?.alt}
            className="swo-contact__image"
          />
        </div>
      )}
      <div className="swo-contact__body">
        {title && (
          <div className="swo-contact__header">
            <span className="swo-contact__title">{title}</span>
            <span className="swo-contact__subtitle">{subtitle}</span>
          </div>
        )}
        {copy && <RichText text={copy} className="swo-contact__copy" />}

        {links && links.length && (
          <ul className="swo-contact__links">
            {links.map(({ icon, href, label, ariaLabel, newTab }, i) => (
              <li key={i}>
                <Link
                  className="swo-contact__link"
                  aria-label={ariaLabel}
                  href={href}
                  {...(newTab && { target: "_blank", rel: "noopener" })}
                >
                  <Icon
                    role="presentation"
                    focusable="false"
                    aria-hidden
                    icon={icon}
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </address>
  </Container>
));

export const ContactContext = createContext(ContactContextDefault);
export const Contact = forwardRef<HTMLDivElement, ContactProps>(
  (props, ref) => {
    const Component = useContext(ContactContext);
    return <Component {...props} ref={ref} />;
  }
);
Contact.displayName = "Contact";

export const ContactProvider: FC<PropsWithChildren> = (props) => (
  <KdsContactContext.Provider {...props} value={Contact} />
);
