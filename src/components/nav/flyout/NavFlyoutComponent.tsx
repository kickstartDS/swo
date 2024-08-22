import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { Logo } from "../../logo/LogoComponent";
import "./nav-flyout.scss";

export const NavFlyout = ({ items, inverted, logo }) =>
  items && items.length > 0 ? (
    <nav
      className="dsa-nav-flyout"
      ks-inverted={inverted.toString()}
      id="dsa-nav-flyout"
      aria-label="Hauptnavigation"
    >
      <Logo {...logo} className="dsa-nav-flyout__logo" />

      <ul className="dsa-nav-flyout-list">
        {items.map(({ label, href, id, active, items: subItems }) => {
          const isActive =
            active === href ||
            subItems?.some((navItem) => active === navItem.href);
          return (
            <li
              className={classnames(
                "dsa-nav-flyout__item",
                isActive && "dsa-nav-flyout__item--active"
              )}
              key={id}
            >
              <Link href={href} className={`dsa-nav-flyout__link`}>
                {label}
                {subItems?.length ? (
                  <Icon
                    className="dsa-nav-flyout__link__icon"
                    icon="chevron-down"
                  />
                ) : (
                  ""
                )}
              </Link>
              {subItems?.length ? (
                <ul className="dsa-nav-flyout__sublist">
                  {subItems.map(({ label, href, id }) => {
                    return (
                      <li
                        className={classnames("dsa-nav-flyout__item")}
                        key={id}
                      >
                        <Link href={href} className={`dsa-nav-flyout__link `}>
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
  ) : null;
