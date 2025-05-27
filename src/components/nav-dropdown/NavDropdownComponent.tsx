import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { FC } from "react";
import { NavDropdownProps } from "./NavDropdownProps";
import "./nav-dropdown.scss";

export type { NavDropdownProps };

export const NavDropdown: FC<NavDropdownProps> = ({ items, inverted }) => (
  <ul
    className={classnames(`swo-nav-dropdown`)}
    ks-inverted={inverted?.toString()}
  >
    {items.map(({ label, active, href }) => {
      return (
        <li
          className={classnames(
            "swo-nav-dropdown__item",
            active && "swo-nav-dropdown__item--active"
          )}
          key={href}
        >
          <Link href={href} className={`swo-nav-dropdown__label`}>
            {label}
          </Link>
        </li>
      );
    })}
  </ul>
);
