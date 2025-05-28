import {
  HTMLAttributes,
  FC,
  PropsWithChildren,
  forwardRef,
  createContext,
  useContext,
} from "react";
import classnames from "classnames";
import {
  TeaserBoxContextDefault,
  TeaserBoxContext,
} from "@kickstartds/base/lib/teaser-box";
import { TeaserCardProps } from "./TeaserCardProps";
import "./teaser-card.scss";
import { Container } from "@kickstartds/core/lib/container";
import { compiler } from "markdown-to-jsx";

export type { TeaserCardProps };

export const TeaserCardContextDefault = forwardRef<
  HTMLDivElement,
  TeaserCardProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      headline,
      text,
      button,
      target,
      image,
      imageRatio = "wide",
      label,
      layout = "stack",
      campaignGreen = false,
      ...rest
    },
    ref
  ) => (
    <Container name="teaser-card">
      <div
        className={classnames(
          `swo-teaser-card`,
          `swo-teaser-card--${layout}`,
          `swo-teaser-card--${imageRatio}`,
          campaignGreen && "swo-teaser-card--campaign-green"
        )}
      >
        <TeaserBoxContextDefault
          {...rest}
          topic={headline}
          text={text}
          // @ts-expect-error
          renderTopic={() => (
            <>
              {label && <span className="swo-teaser-card__label">{label}</span>}
              {compiler(headline)}
            </>
          )}
          link={{
            hidden: button?.hidden,
            label: button.label,
            variant: "primary",
            target: target,
            icon: button?.chevron ? "chevron-right" : undefined,
          }}
          image={image}
          ref={ref}
        />
      </div>
    </Container>
  )
);

export const TeaserCardContext = createContext(TeaserCardContextDefault);
export const TeaserCard = forwardRef<
  HTMLDivElement,
  TeaserCardProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(TeaserCardContext);
  return <Component {...props} ref={ref} />;
});
TeaserCard.displayName = "TeaserCard";

export const TeaserBoxProvider: FC<PropsWithChildren> = (props) => (
  <TeaserBoxContext.Provider {...props} value={TeaserCard} />
);
