import { FC } from "react";
import { LogoProps } from "./LogoProps";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import "./logo.scss";

export const Logo: FC<LogoProps> = ({
  src,
  srcInverted = "/",
  alt,
  inverted = false,
  width,
  height,
  homepageHref,
}) => (
  <>
    <Link className="dsa-logo" href={homepageHref}>
      <Picture
        className="dsa-logo__img"
        src={inverted === false ? src : srcInverted}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  </>
);
Logo.displayName = "Logo";
