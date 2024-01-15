import { HTMLAttributes, FC } from "react";
import { StatsProps } from "./StatsProps";
import "./stats.scss";
import { CountUp } from "@kickstartds/content/lib/count-up";

export const Stats: FC<StatsProps & HTMLAttributes<HTMLElement>> = ({
  stats = [],
}) => {
  return (
    <div className="c-stats">
      {stats.map((stat, index) => (
        <CountUp
          className="c-stats__item"
          key={index}
          to={stat.number}
          icon={{
            icon: stat?.icon,
          }}
          text={stat?.description}
          topic={stat.title}
        />
      ))}
    </div>
  );
};
