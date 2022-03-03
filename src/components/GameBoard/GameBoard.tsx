import React from "react";

import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export const GameBoard = () => {
  const startGame = () => {
    console.log("hello2");
  };

  const playAgain = () => {
    console.log("hey");
  };
  return (
    <div>
      <ButtonComponent onClick={playAgain} text="Play again" />
      <ButtonComponent onClick={startGame} text="Start game" />
    </div>
  );
};
