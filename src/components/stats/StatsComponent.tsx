import { HTMLAttributes, FC } from "react";
import { StatsProps } from "./StatsProps";
import "./stats.scss";
import { Stat } from "../stat/StatComponent";

export const Stats: FC<StatsProps & HTMLAttributes<HTMLElement>> = ({
  stat: stats = [],
}) => {
  return (
    <div className="dsa-stats">
      {stats.map((item, index) => (
        <Stat {...item} key={index} />
      ))}
    </div>
  );
};
