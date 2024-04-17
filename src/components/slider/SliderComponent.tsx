import { HTMLAttributes, forwardRef } from "react";
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
      ...props
    },
    ref
  ) => (
    <KickstartSlider
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
