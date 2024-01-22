import { Divider } from "@mui/material";
import React from "react";
import { StatsItem } from "./StatsItem";

export const StatsHome = (props) => {
  return (
    <>
      <div className="my-14">
        <Divider />
      </div>
      <div
        data-sb-object-id={props.id}
        className="my-10 grid grid-cols-3 gap-8"
      >
        {props?.statItems?.map((stat) => (
          <StatsItem {...stat} key={stat.id} />
        ))}
      </div>
      <div className="my-14">
        <Divider />
      </div>
    </>
  );
};
