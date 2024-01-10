import React from "react";
import QuiltedImageList from "./ImageList";
import { Button, Divider } from "@mui/material";
import CardHome from "./CardHome";
import ButtonHome from "./ButtonHome";

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
          <QuiltedImageList image={props.image} />
        </div>
      </div>

      <div className="my-14">
        <Divider />
      </div>

      <div data-sb-field-path="brandTitle" className="text-4xl font-bold">
        {props.brandTitle}
      </div>
      <p data-sb-field-path="brandDescription" className="mt-4 text-lg">
        {props.brandDescription}
      </p>

      <div className="my-10 grid grid-cols-3 gap-8">
        {props.productReference.map((product) => (
          <CardHome {...product} />
        ))}
      </div>

      <ButtonHome {...props.button} theme="outline" />

      <div className="my-14">
        <Divider />
      </div>
    </div>
  );
};
