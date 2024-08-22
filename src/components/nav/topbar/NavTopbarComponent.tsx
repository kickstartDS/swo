import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { NavDropdown } from "../dropdown/NavDropdownComponent";
import "./nav-topbar.scss";

export const NavTopbar = ({ items, dropdownInverted }) =>
  items && items.length > 0 ? (
    <nav
      className="dsa-nav-topbar"
      id="dsa-nav-main"
      aria-label="Hauptnavigation"
    >
      <ul className="dsa-nav-topbar__list">
        {items.map(({ label, href, id, active, items: subItems }) => {
          const isActive =
            active === href ||
            subItems?.some((navItem) => active === navItem.href);
          return (
            <li
              className={classnames(
                "dsa-nav-topbar__item",
                isActive && "dsa-nav-topbar__item--active",
                active && "dsa-nav-topbar__item--active",
                subItems?.length && "dsa-nav-topbar__item--dropdown"
              )}
              key={id}
            >
              {subItems?.length ? (
                <span tabIndex={0} className="dsa-nav-topbar__label">
                  {label}
                  {subItems?.length ? (
                    <Icon
                      className="dsa-nav-topbar__label__icon"
                      icon="chevron-down"
                    />
                  ) : (
                    ""
                  )}
                </span>
              ) : (
                <Link
                  href={href}
                  className={`dsa-nav-topbar__label dsa-nav-topbar__link`}
                >
                  {label}
                </Link>
              )}

              {subItems?.length ? (
                <NavDropdown items={subItems} inverted={dropdownInverted} />
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
