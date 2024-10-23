import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { HtmlProps } from "./HtmlProps";

export type { HtmlProps };

export const HtmlContextDefault = forwardRef<
  HTMLDivElement,
  HtmlProps & HTMLAttributes<HTMLDivElement>
>(({ html, className, component, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("c-html", className)}
      dangerouslySetInnerHTML={{ __html: html }}
      ks-component={component}
      {...props}
    />
  );
});

export const HtmlContext = createContext(HtmlContextDefault);
export const Html = forwardRef<
  HTMLDivElement,
  HtmlProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(HtmlContext);
  return <Component {...props} ref={ref} />;
});
Html.displayName = "Html";
