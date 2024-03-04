import { FC } from "react";
import { CtaProps } from "./CtaProps";
import "./cta.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export const Cta: FC<CtaProps> = ({
  headline,
  highlightText = false,
  sub,
  image,
  text,
  textAlign,
  backgroundImage,
  backgroundColor,
  colorNeutral,
  contentAlign,
  order,
  fullWidth = false,
  buttons = [],
}) => {
  const ButtonGroup = useButtonGroup();

  return (
    <ButtonContext.Provider
      // @ts-expect-error
      value={ButtonGroup}
    >
      <Storytelling
        className={classnames(
          "dsa-cta",
          fullWidth ? `dsa-cta--full-width` : "",
          highlightText ? `dsa-cta--highlight-text` : "",
          colorNeutral ? `dsa-cta--color-neutral` : "",
          contentAlign && contentAlign !== "center"
            ? `dsa-cta--align-${contentAlign}`
            : ""
        )}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
        full={image?.padding === false}
        image={{
          source: image?.src,
          order: order,
        }}
        box={{
          text: text,
          textAlign: textAlign,
          link: {
            // @ts-expect-error
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
    </ButtonContext.Provider>
  );
};
