import React from "react";
import styled from "@emotion/styled";

const ScoreboardContainer = styled.div({
  display: "flex",
  border: "1px solid #FFE917",
  borderRadius: "8%",
  color: "#FFE917",
  justifyContent: "center",
  flexWrap: "wrap",
  textTransform: "uppercase",
});

const ScoreboardTitle = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid #FFE917",
  height: "40px",
});

const ScoreboardPlayer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
});

const ScoreboardPlayerProperty = styled.span({
  padding: "20px 0",
});

const ScoreboardPlayerName = styled(ScoreboardPlayerProperty)`
  border-bottom: 1px solid #ffe917;
`;

interface ScoreboardProps {
  score: {
    firstPlayer: number;
    secondPlayer: number;
  };
}

export const Scoreboard = ({ score }: ScoreboardProps) => {
  return (
    <ScoreboardContainer>
      <ScoreboardTitle>Score</ScoreboardTitle>
      <ScoreboardPlayer>
        <ScoreboardPlayerName>First player</ScoreboardPlayerName>
        <ScoreboardPlayerProperty>{score.firstPlayer}</ScoreboardPlayerProperty>
      </ScoreboardPlayer>
      <ScoreboardPlayer>
        <ScoreboardPlayerName>Second player</ScoreboardPlayerName>
        <ScoreboardPlayerProperty>
          {score.secondPlayer}
        </ScoreboardPlayerProperty>
      </ScoreboardPlayer>
    </ScoreboardContainer>
  );
};
