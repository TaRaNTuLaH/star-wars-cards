import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { getPeople, getPerson } from "../../api/swapi/people.api";
import { getStarship, getStarships } from "../../api/swapi/starships.api";
import { Response } from "../../interfaces/Common.interface";
import { StarshipResponse } from "../../interfaces/Starship.interface";
import { PersonResponse } from "../../interfaces/Person.interface";
import {
  getEligibleProperties,
  mapPersonProperties,
  mapStarshipProperties,
  selectRandomObjectProperty,
} from "../../utils";
import { Scoreboard } from "../Scoreboard/Scoreboard";

const GameBoardContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  height: "100%",
  width: "100%",
  color: "#FFE917",
  fontSize: "20px",
  textTransform: "uppercase",
});

export enum gameType {
  "Starships" = "starships",
  "People" = "people",
}

export type CardsObject = {
  firstCard: {};
  secondCard: {};
};
export const GameBoard: React.FC = () => {
  const [gameMode, setGameMode] = useState<gameType>();
  const [cardsCount, setCardsCount] = useState<number>(0);
  const [fightValues, setFightValues] = useState<number[]>([]);
  const [cards, setCards] = useState<CardsObject>({
    firstCard: {},
    secondCard: {},
  });
  const [score, setScore] = useState<{
    firstPlayer: number;
    secondPlayer: number;
  }>({ firstPlayer: 0, secondPlayer: 0 });

  useEffect(() => {
    (async () => {
      if (gameMode) {
        setCardsCount(await getDataCount(gameMode));
      }
    })();
  }, [gameMode]);

  const getDataCount = async (gameMode: gameType) => {
    let response: Response<StarshipResponse[] | PersonResponse[]>;
    if (gameMode === gameType.Starships) {
      response = await getStarships();
    } else {
      response = await getPeople();
    }
    return response.count;
  };

  //Pick random number from range of 1 to limit
  const getRandomIds = (limit: number) => {
    let firstNumber: number;
    let secondNumber: number;
    do {
      firstNumber = Math.floor(Math.random() * limit) + 1;
      secondNumber = Math.floor(Math.random() * limit) + 1;
    } while (firstNumber === secondNumber);

    return [firstNumber, secondNumber];
  };

  const startGame = async () => {
    const randomIds = getRandomIds(cardsCount);
    if (gameMode === gameType.People) {
      const firstPerson = await getPerson(randomIds[0]);
      const secondPerson = await getPerson(randomIds[1]);
      const firstPersonMappedProperties = mapPersonProperties(firstPerson);
      const secondPersonMappedProperties = mapPersonProperties(secondPerson);
      setCards({
        firstCard: firstPerson,
        secondCard: secondPerson,
      });
      const eligibleProperties = getEligibleProperties(
        firstPersonMappedProperties
      );
      const randomProperty = selectRandomObjectProperty(eligibleProperties);
      const firstValue = firstPersonMappedProperties[
        randomProperty as keyof typeof firstPersonMappedProperties
      ] as number;
      const secondValue = secondPersonMappedProperties[
        randomProperty as keyof typeof secondPersonMappedProperties
      ] as number;
      setFightValues([firstValue, secondValue]);
      Fight(firstValue, secondValue);
    } else if (gameMode === gameType.Starships) {
      const firstStarship = await getStarship(randomIds[0]);
      const secondStarship = await getStarship(randomIds[1]);
      const firstStarshipMappedProperties =
        mapStarshipProperties(firstStarship);
      const secondStarshipMappedProperties =
        mapStarshipProperties(secondStarship);
      setCards({
        firstCard: firstStarship,
        secondCard: secondStarship,
      });
      const eligibleProperties = getEligibleProperties(
        firstStarshipMappedProperties
      );
      const randomProperty = selectRandomObjectProperty(eligibleProperties);
      const firstValue = firstStarshipMappedProperties[
        randomProperty as keyof typeof firstStarshipMappedProperties
      ] as number;
      const secondValue = secondStarshipMappedProperties[
        randomProperty as keyof typeof secondStarshipMappedProperties
      ] as number;
      setFightValues([firstValue, secondValue]);
      Fight(firstValue, secondValue);
    }
    //shouldn't reach it :)
    else {
      throw new Error("How u ended up here? ;)");
    }
  };

  const Fight = useCallback(
    (firstValue: number, secondValue: number): void => {
      if (isNaN(firstValue) || isNaN(secondValue)) {
        console.error("one of the values was NaN :(");
        return;
      }
      if (firstValue > secondValue) {
        setScore({
          firstPlayer: score.firstPlayer + 1,
          secondPlayer: score.secondPlayer,
        });
      }
      if (firstValue < secondValue) {
        setScore({
          firstPlayer: score.firstPlayer,
          secondPlayer: score.secondPlayer + 1,
        });
      }
      return;
    },
    [score.firstPlayer, score.secondPlayer]
  );
  //trigger SWC-7 workflow, cause of network issue
  const playAgain = () => {
    Fight(fightValues[0], fightValues[1]);
  };
  return (
    <GameBoardContainer>
      <Scoreboard score={score} />
      <p>Current game mode: {gameMode}</p>
      <Button
        onClick={() => {
          setGameMode(gameType.Starships);
        }}
        text={gameType.Starships}
      />
      <Button
        onClick={() => {
          setGameMode(gameType.People);
        }}
        text={gameType.People}
      />
      <Card data={cards.firstCard} />
      <Card data={cards.secondCard} />
      <Button disabled={!gameMode} onClick={startGame} text="Start game" />
      <Button onClick={playAgain} text="Play again" />
    </GameBoardContainer>
  );
};
