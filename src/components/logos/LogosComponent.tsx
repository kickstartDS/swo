import { HTMLAttributes, FC } from "react";
import classnames from "classnames";

import { LogosProps } from "./LogosProps";
import "./logos.scss";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";
import { Button } from "@kickstartds/base/lib/button";
import { Link } from "@kickstartds/base/lib/link";

export const Logos: FC<LogosProps & HTMLAttributes<HTMLElement>> = ({
  items = [],
  tagline,
  align,
  cta,
  logosPerRow = "6",
}) => {
  return (
    <>
      <div className={classnames(`dsa-logos dsa-logos--align-${align}`)}>
        <div className="dsa-logos__tagline">{tagline}</div>
        <LogoTiles
          className={classnames(
            `dsa-logo-tiles dsa-logo-tiles--cols-${logosPerRow}`
          )}
          logos={items}
        />
        {cta?.toggle ? (
          <div className="dsa-logos__cta">
            <div className="dsa-logos__cta__text">
              {cta?.text}
              {cta?.style === "text" ? (
                <>
                  &#32;
                  <Link className="dsa-logos__cta__link" href={cta.link}>
                    {cta.label}
                  </Link>
                </>
              ) : (
                ""
              )}
            </div>
            {cta?.style === "button" ? (
              <Button href={cta.link} label={cta.label} />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
