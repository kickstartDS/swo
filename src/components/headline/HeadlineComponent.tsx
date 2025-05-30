import classnames from "classnames";
import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";
import { compiler } from "markdown-to-jsx";

import { HeadlineContext } from "@kickstartds/base/lib/headline";
import { defaultRenderFn } from "@kickstartds/core/lib/core";

import { HeadlineProps } from "./HeadlineProps";
import "./headline.scss";

export type { HeadlineProps };

interface RenderFunctions {
  renderContent?: typeof defaultRenderFn;
  renderSubheadline?: typeof defaultRenderFn;
}

export const Headline = forwardRef<
  HTMLElement,
  HeadlineProps & RenderFunctions & Omit<HTMLAttributes<HTMLElement>, "style">
>(
  (
    {
      content,
      text = content,
      sub,
      align = "left",
      switchOrder = true,
      level = "h2",
      // @ts-expect-error: Some kDS Components set the `styleAs`Props (e.g. https://github.com/kickstartDS/content/blob/next/source/storytelling/StorytellingComponent.tsx#L146)
      styleAs,
      style = styleAs || "h2",
      spaceAfter = "small",
      className,
      renderContent = compiler,
      renderSubheadline = compiler,
      ...props
    },
    ref
  ) => {
    const TagName = level;
    return text || sub ? (
      <header
        className={classnames(
          "swo-headline",
          `swo-headline--${style}`,
          style !== "none" && style !== level && `swo-headline--${style}`,
          `swo-headline--align-${align}`,
          spaceAfter && `swo-headline--space-after-${spaceAfter}`,
          switchOrder && `swo-headline--switch-order`,
          className
        )}
        ref={ref}
        {...props}
      >
        {sub && switchOrder && (
          <p className="swo-headline__subheadline">{renderSubheadline(sub)}</p>
        )}

        <TagName className={classnames("swo-headline__headline")}>
          <span className="swo-headline__inner">
            {renderContent(text)}
            {props.id && level === "h2" && (
              <a
                href={`#${props.id}`}
                className="swo-headline__anchor"
                aria-label="Link to this section"
                title="Link to this section"
              >
                #
              </a>
            )}
          </span>
        </TagName>

        {sub && !switchOrder && (
          <p className="swo-headline__subheadline">{renderSubheadline(sub)}</p>
        )}
      </header>
    ) : null;
  }
);
Headline.displayName = "Headline";

export const HeadlineProvider: FC<PropsWithChildren> = (props) => (
  <HeadlineContext.Provider {...props} value={Headline} />
);
