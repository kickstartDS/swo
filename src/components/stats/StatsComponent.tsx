import { HTMLAttributes, FC } from "react";
import { StatsProps } from "./StatsProps";
import "./stats.scss";
import { CountUp } from "@kickstartds/content/lib/count-up";

export const Stats: FC<StatsProps & HTMLAttributes<HTMLElement>> = ({
  items = [],
}) => {
  return (
    <div className="c-stats">
      {items.map((item, index) => (
        <CountUp
          className="c-stats__item"
          key={index}
          to={item.number}
          icon={{
            icon: item?.icon,
          }}
          text={item?.description}
          topic={item.title}
        />
      ))}
    </div>
  );
};
