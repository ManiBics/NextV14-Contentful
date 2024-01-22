import React from "react";
import CardHome from "./Home/CardHome";
import ButtonHome from "./Home/ButtonHome";
import { Divider } from "@mui/material";

export const TitleCardImage = (props) => {
  return (
    <div data-sb-object-id={props.id}>
      <div data-sb-field-path="title" className="text-4xl font-bold">
        {props.title}
      </div>
      <p data-sb-field-path="description" className="mt-4 text-lg">
        {props.description}
      </p>

      <div className="my-10 grid grid-cols-3 gap-8">
        {props.productReference?.map((product) => (
          <CardHome {...product} key={product.id} />
        ))}
      </div>
      {props.button && <ButtonHome {...props.button} theme="outline" />}

      <div className="my-14">
        <Divider />
      </div>
    </div>
  );
};
