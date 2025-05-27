import {
  HTMLAttributes,
  FC,
  PropsWithChildren,
  forwardRef,
  createContext,
  useContext,
} from "react";
import classnames from "classnames";
import { useKsComponent } from "@kickstartds/core/lib/react";

import {
  SectionContextDefault as KdsSectionContextDefault,
  SectionContext as KdsSectionContext,
} from "@kickstartds/base/lib/section";

import { SectionProps } from "./SectionProps";
import "./section.scss";
import { identifier } from "./js/Section.client";

export type { SectionProps };

export const SectionContextDefault = forwardRef<
  HTMLDivElement,
  SectionProps & Omit<HTMLAttributes<HTMLElement>, "style" | "content">
>(
  (
    {
      headline,
      content,
      headerSpacing,
      width = "default",
      style = "default",
      spotlight = false,
      backgroundColor = "default",
      transition,
      backgroundImage,
      spaceBefore = "default",
      spaceAfter = "default",
      className,
      inverted,
      buttons = [],
      ...props
    },
    ref
  ) => {
    const { large: headlineLarge = false, ...headlineRest } = {
      align: "left",
      ...headline,
    };
    const componentProps = useKsComponent(identifier, ref, [
      spotlight,
      content?.mode === "slider",
    ]);
    return (
      <KdsSectionContextDefault
        {...props}
        {...componentProps}
        className={classnames(
          "swo-section",
          style && style !== "default" && `swo-section-style--${style}`,
          transition &&
            transition !== "none" &&
            `swo-section--transition-${transition}`,
          headerSpacing && "swo-section--header-spacing",
          spotlight && "swo-section--spotlight",
          className
        )}
        background={
          backgroundColor === "default"
            ? "default"
            : backgroundColor === "accent"
            ? "accent"
            : backgroundColor === "bold"
            ? "bold"
            : undefined
        }
        backgroundImage={backgroundImage}
        content={content}
        headline={{
          ...headlineRest,
          spaceAfter: "large",
          // @ts-expect-error
          content: headlineRest.text,
          level: "h2",
          style: headlineLarge ? "h1" : "h2",
        }}
        buttons={{
          buttons,
          // @ts-expect-error
          items: buttons,
        }}
        width={width}
        spaceBefore={spaceBefore}
        spaceAfter={spaceAfter}
        inverted={style === "colorful" ? true : inverted}
        ref={ref}
      >
        {props.children}
      </KdsSectionContextDefault>
    );
  }
);

export const SectionContext = createContext(SectionContextDefault);
export const Section = forwardRef<
  HTMLDivElement,
  SectionProps & Omit<HTMLAttributes<HTMLElement>, "style" | "content">
>((props, ref) => {
  const Component = useContext(SectionContext);
  return <Component {...props} ref={ref} />;
});
Section.displayName = "Section";

export const SectionProvider: FC<PropsWithChildren<any>> = (props) => (
  <KdsSectionContext.Provider {...props} value={Section} />
);
