import React from "react";
import QuiltedImageList from "./ImageList";
import { Divider } from "@mui/material";
import { StatsHome } from "./StatsHome";
import { TitleCardImage } from "./TitleCardImage";
import { RegionalHome } from "./RegionalHome";

export const Home = (props) => {
  return (
    <div data-sb-object-id={props.id}>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div data-sb-field-path="hometitle" className="text-5xl font-bold">
            {props.hometitle}
          </div>
          <p data-sb-field-path="description" className="mt-4 text-lg">
            {props.description}
          </p>
        </div>
        <div>
          <QuiltedImageList {...props} />
        </div>
      </div>

      <div className="my-14">
        <Divider />
      </div>

      <TitleCardImage {...props.brandSection} />

      <div className="my-14">
        <Divider />
      </div>

      <div className="my-10 grid grid-cols-3 gap-8">
        {props.globalEntry.map((stat) => (
          <StatsHome {...stat} key={stat.id} />
        ))}
      </div>

      <div className="my-14">
        <Divider />
      </div>

      <TitleCardImage {...props.healthCareSection} />

      <div className="mt-14" />

      <RegionalHome {...props.regionalSection} />
    </div>
  );
};
