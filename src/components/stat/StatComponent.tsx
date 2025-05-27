import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { StatProps } from "./StatProps";
import { CountUp } from "@kickstartds/content/lib/count-up";

export type { StatProps };

export const StatContextDefault = forwardRef<
  HTMLDivElement,
  StatProps & HTMLAttributes<HTMLDivElement>
>(({ number, title, description, icon, ...rest }, ref) => (
  <CountUp
    {...rest}
    ref={ref}
    className="swo-stats__item"
    to={number}
    icon={{
      icon: icon,
    }}
    text={description}
    topic={title}
  />
));

export const StatContext = createContext(StatContextDefault);
export const Stat = forwardRef<
  HTMLDivElement,
  StatProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(StatContext);
  return <Component {...props} ref={ref} />;
});
Stat.displayName = "Stat";
