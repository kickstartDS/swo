import { HTMLAttributes, forwardRef, createContext, useContext } from "react";
import { StatsProps } from "./StatsProps";
import "./stats.scss";
import { Stat } from "../stat/StatComponent";

export type { StatsProps };

export const StatsContextDefault = forwardRef<
  HTMLDivElement,
  StatsProps & HTMLAttributes<HTMLDivElement>
>(({ stat: stats = [], ...rest }, ref) => {
  return (
    <div {...rest} ref={ref} className="swo-stats">
      {stats.map((item, index) => (
        <Stat {...item} key={index} />
      ))}
    </div>
  );
});

export const StatsContext = createContext(StatsContextDefault);
export const Stats = forwardRef<
  HTMLDivElement,
  StatsProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(StatsContext);
  return <Component {...props} ref={ref} />;
});
Stats.displayName = "Stats";
