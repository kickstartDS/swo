import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { FC } from "react";
import { NavDropdownProps } from "./NavDropdownProps";

export const NavDropdown: FC<NavDropdownProps> = ({ items, inverted }) => (
  <ul
    ks-inverted={inverted?.toString()}
    className={classnames(`dsa-nav-dropdown`)}
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
