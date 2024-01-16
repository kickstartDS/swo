import { FC, PropsWithChildren } from "react";
import { SliderProps } from "./SliderProps";
import { Slider as KickstartSlider } from "@kickstartds/content/lib/slider";
import "./slider.scss";

export const Slider: FC<PropsWithChildren<SliderProps>> = ({
  gap,
  type,
  autoplay,
  arrows,
  teaseNeighbours,
  children,
  ...props
}) => (
  <KickstartSlider
    gap={gap}
    type={type}
    arrows={arrows}
    autoplay={autoplay}
    teaseNeighbours={teaseNeighbours}
    {...props}
  >
    {children}
  </KickstartSlider>
);
