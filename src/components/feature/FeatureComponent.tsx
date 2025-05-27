import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import classnames from "classnames";
import { Icon } from "@kickstartds/base/lib/icon";
import { Button } from "../button/ButtonComponent";
import { FeatureProps } from "./FeatureProps";
import { Link } from "@kickstartds/base/lib/link";

export type { FeatureProps };

export const FeatureContextDefault = forwardRef<
  HTMLDivElement,
  FeatureProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>(({ style = "stack", title, text, icon, cta, ...rest }, ref) => (
  <div
    {...rest}
    ref={ref}
    className={classnames(
      `swo-feature swo-feature--${
        style === `stack`
          ? `stack swo-feature--large`
          : style === `besideSmall`
          ? `beside swo-feature--small`
          : style === `besideLarge`
          ? `beside swo-feature--large`
          : style === `intext`
          ? `intext swo-feature--small`
          : style === `centered`
          ? `centered swo-feature--large`
          : `${style}`
      }`
    )}
  >
    <div className="swo-feature__header">
      {icon && (
        <Icon
          className="swo-feature__icon"
          icon={icon}
          role="presentation"
          aria-hidden
          focusable={false}
        />
      )}
      <span className="swo-feature__title">{title}</span>
    </div>
    {text || cta.style === "intext" ? (
      <p className="swo-feature__text">
        {text}
        {cta.style === "intext" && cta.toggle ? (
          <>
            &#32;{" "}
            <Link href={cta.target}>{cta.label ? cta.label : "See more"}</Link>
          </>
        ) : (
          ""
        )}
      </p>
    ) : (
      ""
    )}

    {cta.toggle && (cta.style === "link" || cta.style === "button") && (
      <div className="swo-feature__cta">
        {cta.style === "link" ? (
          <Link className="swo-feature__link" href={cta.target}>
            {cta.label ? cta.label : "See more"}
            <Icon
              aria-hidden
              role="presentation"
              focusable={false}
              icon={cta.icon || "arrow-right"}
            />
          </Link>
        ) : cta.style === "button" ? (
          <Button
            className="swo-feature__button"
            size="small"
            target={cta.target}
            label={cta.label ? cta.label : "See more"}
          />
        ) : (
          ""
        )}
      </div>
    )}
  </div>
));

export const FeatureContext = createContext(FeatureContextDefault);
export const Feature = forwardRef<
  HTMLDivElement,
  FeatureProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>((props, ref) => {
  const Component = useContext(FeatureContext);
  return <Component {...props} ref={ref} />;
});
Feature.displayName = "Feature";
