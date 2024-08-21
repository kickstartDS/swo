import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { NavDropdown } from "./NavDropdownComponent";
import "./nav-topbar.scss";

export const NavTopbar = ({ items, active, dropdownInverted }) =>
  items && items.length > 0 ? (
    <nav
      className="dsa-nav-topbar"
      id="dsa-nav-main"
      aria-label="Hauptnavigation"
    >
      <ul className="dsa-nav-list">
        {items.map(({ label, href, id, items: subItems }) => {
          return (
            <li
              className={classnames(
                "dsa-nav-topbar__item",
                active && "dsa-nav-topbar__item--active"
              )}
              key={id}
            >
              <Link href={href} className={`dsa-nav-topbar__link`}>
                {label}
                {subItems?.length ? (
                  <Icon
                    className="dsa-nav-topbar__link__icon"
                    icon="chevron-down"
                  />
                ) : (
                  ""
                )}
              </Link>

              {subItems?.length ? (
                <NavDropdown items={subItems} inverted={dropdownInverted} />
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
