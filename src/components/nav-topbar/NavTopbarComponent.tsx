import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { NavDropdown } from "../nav-dropdown/NavDropdownComponent";
import "./nav-topbar.scss";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import { NavTopbarProps } from "./NavTopbarProps";

export type { NavTopbarProps };

export const NavTopbarContextDefault = forwardRef<
  HTMLElement,
  NavTopbarProps & HTMLAttributes<HTMLElement>
>(({ items, inverted }, ref) =>
  items && items.length > 0 ? (
    <nav
      className="swo-nav-topbar"
      id="swo-nav-topbar"
      aria-label="Main Navigation"
      ref={ref}
    >
      <ul className="swo-nav-topbar__list">
        {items.map(({ label, href, active, items: subItems }) => {
          return (
            <li
              className={classnames(
                "swo-nav-topbar__item",
                active && "swo-nav-topbar__item--active",
                subItems?.length && "swo-nav-topbar__item--dropdown"
              )}
              key={href}
            >
              {subItems?.length ? (
                <span className="swo-nav-topbar__label">
                  {label}
                  {subItems?.length ? (
                    <Icon
                      className="swo-nav-topbar__label__icon"
                      icon="chevron-down"
                      role="presentation"
                      aria-hidden
                      focusable={false}
                    />
                  ) : (
                    ""
                  )}
                </span>
              ) : (
                <Link
                  href={href}
                  className={`swo-nav-topbar__label swo-nav-topbar__link`}
                >
                  {label}
                </Link>
              )}

              {subItems?.length ? (
                <NavDropdown items={subItems} inverted={inverted} />
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null
);

export const NavTopbarContext = createContext(NavTopbarContextDefault);
export const NavTopbar = forwardRef<
  HTMLElement,
  NavTopbarProps & HTMLAttributes<HTMLElement>
>((props, ref) => {
  const Component = useContext(NavTopbarContext);
  return <Component {...props} ref={ref} />;
});
NavTopbar.displayName = "NavTopbar";
