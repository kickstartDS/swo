import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { Logo } from "../../logo/LogoComponent";
import "./nav-flyout.scss";

export const NavFlyout = ({ items, inverted, logo, active }) =>
  items && items.length > 0 ? (
    <nav
      className="dsa-nav-flyout"
      ks-inverted={inverted.toString()}
      id="dsa-nav-main"
      aria-label="Hauptnavigation"
    >
      <Logo {...logo} className="dsa-nav-main__logo" />

      <ul className="dsa-nav-list">
        {items.map(({ label, href, id, items: subItems }) => {
          const isActive =
            active === href ||
            subItems?.some((navItem) => active === navItem.href);
          return (
            <li
              className={classnames(
                "dsa-nav-item",
                isActive && "dsa-nav-item--active"
              )}
              key={id}
            >
              <Link href={href} className={`dsa-nav-item__link`}>
                {label}
                {subItems?.length ? (
                  <Icon
                    className="dsa-nav-item__link__icon"
                    icon="chevron-down"
                  />
                ) : (
                  ""
                )}
              </Link>
              {subItems?.length ? (
                <>
                  <div className="dsa-nav-"></div>
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
