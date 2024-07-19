import { HTMLAttributes, forwardRef } from "react";
import classnames from "classnames";
import { SliderProps } from "./SliderProps";
import { Slider as KickstartSlider } from "@kickstartds/content/lib/slider";
import "./slider.scss";

export const Slider = forwardRef<
  HTMLDivElement,
  SliderProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      gap,
      type,
      autoplay,
      arrows,
      teaseNeighbours,
      equalHeight,
      children,
      className,
      ...props
    },
    ref
  ) => (
    <KickstartSlider
      className={classnames(`dsa-slider`, className)}
      gap={gap}
      type={type}
      arrows={arrows}
      autoplay={autoplay}
      teaseNeighbours={teaseNeighbours}
      equalHeight={equalHeight}
      {...props}
      ref={ref}
    >
      {children}
    </KickstartSlider>
  )
);
