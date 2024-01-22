import React from "react";
import QuiltedImageList from "./ImageList";
import { Divider } from "@mui/material";
import { StatsHome } from "./StatsItem";
import { TitleCardImage } from "../TitleCardImage";
import { RegionalHome } from "./RegionalHome";

export const WelcomeBannerHome = (props) => {
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
    </div>
  );
};
