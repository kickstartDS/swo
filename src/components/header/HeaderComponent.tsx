import classnames from "classnames";
import { FC } from "react";
import { HeaderProps } from "./HeaderProps";
import { NavMain } from "../nav/NavMainComponent";
import { Logo } from "../logo/LogoComponent";
import "./header.scss";

export const Header: FC<HeaderProps> = ({
  logo,
  floating,
  inverted = false,
  flyoutInverted = false,
  dropdownInverted = false,
  navItems = [],
}) => (
  <>
    <div
      className={classnames(
        "dsa-header",
        floating ? `dsa-header--floating` : ""
      )}
      ks-inverted={inverted.toString()}
    >
      <div className="dsa-header__content">
        <Logo {...logo} className="dsa-header__logo" inverted={inverted} />
        <NavMain
          flyoutInverted={flyoutInverted}
          dropdownInverted={dropdownInverted}
          items={navItems}
          logo={{
            ...logo,
            inverted: flyoutInverted,
          }}
        />
      </div>
    </div>
  </>
);
Header.displayName = "Header";
