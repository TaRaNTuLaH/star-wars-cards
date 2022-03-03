import React from "react";

import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export const GameBoard = () => {
  const someFunction = () => {
    console.log("hey");
  };
  return (
    <div>
      This is Game Board!
      <ButtonComponent onClick={someFunction} text="some button" />
    </div>
  );
};
