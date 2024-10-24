import {
  createContext,
  forwardRef,
  HTMLAttributes,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import classNames from "classnames";
import { HtmlProps } from "./HtmlProps";

export type { HtmlProps };

const copyScriptTag = (original: Element) => {
  if (original.tagName !== "SCRIPT") {
    return original;
  }

  const copy = document.createElement("script");
  for (const attr of original.attributes) {
    copy.setAttribute(attr.name, attr.value);
  }
  copy.textContent = original.textContent;

  return copy;
};

export const HtmlContextDefault = forwardRef<
  HTMLDivElement,
  HtmlProps & HTMLAttributes<HTMLDivElement>
>(({ html, className, component, ...props }, forwardedRef) => {
  const ref = useRef<HTMLDivElement>(null);
  useImperativeHandle(forwardedRef, () => ref.current);

  useEffect(() => {
    if (html && ref.current) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const elements = [...doc.head.children, ...doc.body.children];
      const insertedElements = elements.map((element) =>
        ref.current.appendChild(copyScriptTag(element))
      );

      return () => {
        for (const insertedElement of insertedElements) {
          insertedElement?.remove();
        }
      };
    }
  }, [html, ref.current]);

  return (
    <div
      ref={ref}
      className={classNames("c-html", className)}
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
