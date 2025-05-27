import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { Button } from "@kickstartds/base/lib/button";
import { HtmlProps } from "./HtmlProps";
import { RichText } from "@kickstartds/base/lib/rich-text";
import "./Html.client";
import "./html.scss";

export type { HtmlProps };

export const HtmlContextDefault = forwardRef<
  HTMLDivElement,
  HtmlProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      html,
      consent,
      consentText,
      consentBackgroundImage,
      consentButtonLabel,
      consentAspectRatio = "16:9",
      inverted,
      className,
      component = "dsa.html",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames("swo-html", className)}
        ks-component={component}
        ks-inverted={inverted ? "true" : undefined}
        {...props}
      >
        <template dangerouslySetInnerHTML={{ __html: html }} />
        {consent && (
          <div
            style={{
              backgroundImage: consentBackgroundImage
                ? `url(${consentBackgroundImage})`
                : undefined,
            }}
            className={classNames("swo-html__consent", {
              "swo-html__consent--sixteen-to-nine":
                consentAspectRatio === "16:9",
              "swo-html__consent--sixteen-to-ten":
                consentAspectRatio === "16:10",
              "swo-html__consent--four-to-three": consentAspectRatio === "4:3",
              "swo-html__consent--square": consentAspectRatio === "1:1",
            })}
          >
            {consentText && <RichText text={consentText} />}
            <Button
              type="button"
              label={consentButtonLabel}
              className="swo-html__consent-button"
              variant="primary"
            />
          </div>
        )}
      </div>
    );
  }
);

export const HtmlContext = createContext(HtmlContextDefault);
export const Html = forwardRef<
  HTMLDivElement,
  HtmlProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(HtmlContext);
  return <Component {...props} ref={ref} />;
});
Html.displayName = "Html";
