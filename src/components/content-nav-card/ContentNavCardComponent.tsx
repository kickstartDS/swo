import { HTMLAttributes, forwardRef, createContext, useContext } from "react";
import classnames from "classnames";
import { ContentNavCardProps } from "./ContentNavCardProps";
import "./content-nav-card.scss";
import { Container } from "@kickstartds/core/lib/container";
import { Picture } from "@kickstartds/base/lib/picture";
import { Button } from "../button/ButtonComponent";

export type { ContentNavCardProps };

export const ContentNavCardContextDefault = forwardRef<
  HTMLDivElement,
  ContentNavCardProps & HTMLAttributes<HTMLDivElement>
>(({ topic, label, link, secondaryLink, image, campaignGreen }, ref) => (
  <Container name="content-nav-card">
    <div
      className={classnames(
        "swo-content-nav-card",
        campaignGreen && "swo-content-nav-card--campaign-green"
      )}
      ref={ref}
    >
      <a
        href={link.target}
        className="swo-content-nav-card__image-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Picture
          src={image?.src}
          alt={image?.alt || ""}
          className="swo-content-nav-card__image"
        />
      </a>
      <div className="swo-content-nav-card__text">
        {label && <span className="swo-content-nav-card__label">{label}</span>}
        <span className="swo-content-nav-card__topic">{topic}</span>
      </div>
      <div className="swo-content-nav-card__links">
        <Button variant="primary" label={link.label} target={link.target} />
        {secondaryLink && secondaryLink.label && secondaryLink.target && (
          <Button
            variant="primary"
            label={secondaryLink.label}
            target={secondaryLink.target}
          />
        )}
      </div>
    </div>
  </Container>
));

export const ContentNavCardContext = createContext(
  ContentNavCardContextDefault
);
export const ContentNavCard = forwardRef<
  HTMLDivElement,
  ContentNavCardProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(ContentNavCardContext);
  return <Component {...props} ref={ref} />;
});
ContentNavCard.displayName = "ContentNavCard";
