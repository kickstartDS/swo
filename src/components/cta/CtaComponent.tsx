import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { CtaProps } from "./CtaProps";
import "./cta.scss";
import { StorytellingContextDefault } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";
import { Container } from "@kickstartds/core/lib/container";

export type { CtaProps };

export const CtaContextDefault = forwardRef<
  HTMLDivElement,
  CtaProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      headline,
      highlightText = false,
      sub,
      image,
      text,
      textAlign,
      backgroundImage,
      backgroundColor,
      colorNeutral,
      align,
      padding,
      order,
      buttons = [],
      inverted = false,
      ...rest
    },
    ref
  ) => {
    const ButtonGroup = useButtonGroup();

    return (
      <ButtonContext.Provider
        // @ts-expect-error
        value={ButtonGroup}
      >
        <Container name="storytelling">
          <StorytellingContextDefault
            {...rest}
            ref={ref}
            className={classnames(
              "swo-cta",
              highlightText ? `swo-cta--highlight-text` : "",
              colorNeutral ? `swo-cta--color-neutral` : "",
              image?.padding ? `swo-cta--image-padding` : "",
              !padding ? `swo-cta--no-padding` : "",
              align && align !== "center" ? `swo-cta--align-${align}` : ""
            )}
            backgroundImage={backgroundImage}
            backgroundColor={backgroundColor}
            full
            image={{
              source: image?.src,
              order: order,
              vAlign: image?.align,
            }}
            box={{
              text: text,
              textAlign: textAlign,
              vAlign: align,
              link: {
                buttons,
                colorNeutral: colorNeutral,
                arrangement: textAlign,
              },
              headline: {
                text: headline,
                level: "h2",
                style: highlightText === true ? "h1" : undefined,
                sub: sub,
                spaceAfter: highlightText === true ? "large" : undefined,
                align: textAlign,
              },
            }}
          />
        </Container>
      </ButtonContext.Provider>
    );
  }
);

export const CtaContext = createContext(CtaContextDefault);
export const Cta = forwardRef<
  HTMLDivElement,
  CtaProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(CtaContext);
  return <Component {...props} ref={ref} />;
});
Cta.displayName = "Cta";
