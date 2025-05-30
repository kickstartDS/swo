import { HTMLAttributes, forwardRef, FC, PropsWithChildren } from "react";
import classnames from "classnames";
import {
  ButtonContextDefault,
  ButtonContext,
} from "@kickstartds/base/lib/button";

import { ButtonProps } from "./ButtonProps";
import "./button.scss";

export type { ButtonProps };

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps & HTMLAttributes<HTMLElement>
>(
  (
    {
      label,
      target,
      size = "medium",
      variant = "primary",
      icon,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => (
    <ButtonContextDefault
      {...props}
      className={classnames("swo-button", `swo-button--${variant}`, className)}
      href={target}
      label={label}
      size={size}
      variant={
        variant === "primary"
          ? "clear"
          : variant === "secondary"
          ? "clear"
          : variant === "tertiary"
          ? "outline"
          : "solid"
      }
      disabled={disabled}
      iconAfter={{
        icon: variant === "primary" ? "chevron-right" : icon,
      }}
      ref={ref}
    />
  )
);
Button.displayName = "Button";

export const ButtonProvider: FC<PropsWithChildren> = (props) => (
  <ButtonContext.Provider {...props} value={Button} />
);
