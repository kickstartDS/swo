import { HTMLAttributes, FC, PropsWithChildren } from "react";
import { TestimonialsProps } from "./TestimonialsProps";
import "./testimonials.scss";
import { Slider } from "../slider/SliderComponent";
import { SliderProps } from "../slider/SliderProps";
import { Testimonial } from "../testimonial/TestimonialComponent";

interface ConditionalSliderProps extends SliderProps {
  layout: "slider" | "list" | "alternating";
}

export const ConditionalSlider: FC<
  PropsWithChildren<ConditionalSliderProps>
> = ({ layout, children, arrows, nav, ...props }) => {
  if (layout === "slider") {
    return (
      <Slider
        className="dsa-testimonials dsa-testimonials--slider"
        arrows={arrows}
        nav={nav}
        {...props}
      >
        {children}
      </Slider>
    );
  } else {
    return (
      <div className="dsa-testimonials dsa-testimonials--list" {...props}>
        {children}
      </div>
    );
  }
};

export const Testimonials: FC<
  TestimonialsProps & HTMLAttributes<HTMLElement>
> = ({ testimonial, layout = "slider", ...props }) => {
  return (
    <ConditionalSlider layout={layout} arrows nav {...props}>
      {testimonial.map((testimonial, index) => (
        <Testimonial
          {...testimonial}
          index={index}
          layout={layout}
          key={index}
        />
      ))}
    </ConditionalSlider>
  );
};
