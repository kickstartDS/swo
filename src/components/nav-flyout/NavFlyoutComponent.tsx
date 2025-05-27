import classnames from "classnames";
import { NavFlyoutProps } from "./NavFlyoutProps";
import { Link } from "@kickstartds/base/lib/link";
import "./nav-flyout.scss";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";

export type { NavFlyoutProps };

export const NavFlyoutContextDefault = forwardRef<
  HTMLElement,
  NavFlyoutProps & HTMLAttributes<HTMLElement>
>(({ items, inverted }, ref) =>
  items && items.length > 0 ? (
    <nav
      className="swo-nav-flyout"
      ks-inverted={inverted.toString()}
      id="swo-nav-flyout"
      aria-label="Main Navigation"
      ref={ref}
    >
      <ul className="swo-nav-flyout__list">
        {items.map(({ label, href, active, items: subItems }) => {
          return (
            <li
              className={classnames(
                "swo-nav-flyout__item",
                active && "swo-nav-flyout__item--active"
              )}
              key={href}
            >
              {subItems?.length ? (
                <span className="swo-nav-flyout__label">{label}</span>
              ) : (
                <Link
                  href={href}
                  className={`swo-nav-flyout__label swo-nav-flyout__link`}
                >
                  {label}
                </Link>
              )}
              {subItems?.length ? (
                <ul className="swo-nav-flyout__sublist">
                  {subItems.map(({ label, href, active }) => {
                    return (
                      <li
                        className={classnames(
                          "swo-nav-flyout__item",
                          active && "swo-nav-flyout__item--active"
                        )}
                        key={href}
                      >
                        <Link
                          href={href}
                          className={`swo-nav-flyout__label swo-nav-flyout__link`}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null
);

export const NavFlyoutContext = createContext(NavFlyoutContextDefault);
export const NavFlyout = forwardRef<
  HTMLElement,
  NavFlyoutProps & HTMLAttributes<HTMLElement>
>((props, ref) => {
  const Component = useContext(NavFlyoutContext);
  return <Component {...props} ref={ref} />;
});
NavFlyout.displayName = "NavFlyout";
