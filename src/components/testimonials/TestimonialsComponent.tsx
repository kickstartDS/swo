import { HTMLAttributes, FC, PropsWithChildren } from "react";
import { TestimonialsProps } from "./TestimonialsProps";
import "./testimonials.scss";
import { Quote } from "@kickstartds/content/lib/quote";
import { Slider } from "../slider/SliderComponent";
import { SliderProps } from "../slider/SliderProps";

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
> = ({ items, layout = "slider", ...props }) => {
  return (
    <ConditionalSlider layout={layout} arrows nav {...props}>
      {items.map((item, index) => (
        <Quote
          className={
            layout === "alternating" && index % 2 === 1
              ? "c-quote--reverse"
              : ""
          }
          key={index}
          text={item.quote}
          source={item.name}
          byline={item.title}
          image={item.image.src}
          renderSource={() => (
            <>
              {item?.rating &&
                (item?.rating ? (
                  <div>
                    {[...Array(item?.rating)].map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                ) : (
                  ""
                ))}
              <div className="c-quote__source">{item.name}</div>
            </>
          )}
        />
      ))}
    </ConditionalSlider>
  );
};
