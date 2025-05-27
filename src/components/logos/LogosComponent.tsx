import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import classnames from "classnames";

import { LogosProps } from "./LogosProps";
import "./logos.scss";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";
import { Button } from "@kickstartds/base/lib/button";
import { Link } from "@kickstartds/base/lib/link";
import { Container } from "@kickstartds/core/lib/container";

export type { LogosProps };

export const LogosContextDefault = forwardRef<
  HTMLDivElement,
  LogosProps & HTMLAttributes<HTMLDivElement>
>(
  (
    { logo: logos = [], tagline, align, cta, logosPerRow = "6", ...rest },
    ref
  ) => (
    <div {...rest} ref={ref}>
      <Container name="logos">
        <div className={classnames(`swo-logos swo-logos--align-${align}`)}>
          {tagline && <div className="swo-logos__tagline">{tagline}</div>}

          <LogoTiles
            className={classnames(
              `swo-logo-tiles swo-logo-tiles--cols-${logosPerRow}`
            )}
            logos={logos}
          />
          {cta?.toggle ? (
            <div className="swo-logos__cta">
              <div className="swo-logos__cta__text">
                {cta?.text}
                {cta?.style === "text" ? (
                  <>
                    &#32;
                    <Link className="swo-logos__cta__link" href={cta.link}>
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
      </Container>
    </div>
  )
);

export const LogosContext = createContext(LogosContextDefault);
export const Logos = forwardRef<
  HTMLDivElement,
  LogosProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(LogosContext);
  return <Component {...props} ref={ref} />;
});
Logos.displayName = "Logos";
