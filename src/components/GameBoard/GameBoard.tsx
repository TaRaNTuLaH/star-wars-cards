import React from "react";
import styled from "@emotion/styled";

import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { getPeople } from "../../api/swapi/people.api";
import { getStarships } from "../../api/swapi/starships.api";
import { Response } from "../../interfaces/Common.interface";
import { StarshipResponse } from "../../interfaces/Starship.interface";
import { PersonResponse } from "../../interfaces/Person.interface";

let GameBoardContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  height: "100%",
  width: "100%",
});

export enum gameType {
  "Starships" = "starships",
  "People" = "people",
}
export const GameBoard: React.FC = () => {
  const getCardsCount = async (gameMode: gameType) => {
    let response: Response<StarshipResponse[] | PersonResponse[]>;
    if (gameMode === gameType.Starships) {
      response = await getStarships();
    } else {
      response = await getPeople();
    }
    return response.count;
  };

  const startGame = async () => {
    getCardsCount(gameType.Starships);
  };

  const playAgain = async () => {};
  return (
    <GameBoardContainer>
      <Card text={"hey"} name="smth" />
      <Card text={"hey2"} name="hey" />
      <Button onClick={startGame} text="Start game" />
      <Button onClick={playAgain} text="Play again" />
    </GameBoardContainer>
  );
};
