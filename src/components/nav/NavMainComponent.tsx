import { FC } from "react";
import { NavMainProps } from "./NavMainProps";
import "./js/NavToggle.client";
import "./js/navMainEvents.client";
import { NavToggleComponent } from "./NavToggleComponent";
import { NavTopbar } from "./topbar/NavTopbarComponent";
import { NavFlyout } from "./flyout/NavFlyoutComponent";

export const NavMain: FC<NavMainProps> = ({
  logo,
  items,
  flyoutInverted,
  dropdownInverted,
}) =>
  items && items.length > 0 ? (
    <div className="dsa-nav-main">
      <NavToggleComponent />
      <NavTopbar
        items={items}
        dropdownInverted={dropdownInverted}
        active={undefined}
      />
      <NavFlyout
        items={items}
        active={undefined}
        inverted={flyoutInverted}
        logo={logo}
      />
    </div>
  ) : null;
