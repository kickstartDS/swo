import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { FC } from "react";
import { NavDropdownProps } from "./NavDropdownProps";
import "./nav-dropdown.scss";

export const NavDropdown: FC<NavDropdownProps> = ({ items, inverted }) => (
  <ul
    className={classnames(`dsa-nav-dropdown`)}
    ks-inverted={inverted?.toString()}
  >
    {items.map(({ label, href, id }) => {
      return (
        <li className={classnames("dsa-nav-dropdown__item")} key={id}>
          <Link href={href} className={`dsa-nav-dropdown__link `}>
            {label}
          </Link>
        </li>
      );
    })}
  </ul>
);
