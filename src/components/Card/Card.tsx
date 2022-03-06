import React from "react";
import { Card as MUICard, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PersonResponse } from "../../interfaces/Person.interface";
import { StarshipResponse } from "../../interfaces/Starship.interface";

const MUICardStyled = styled(MUICard)({
  backgroundColor: "black",
  color: "#FFE917",
  border: "1px solid #FFE917",
  borderRadius: "3%",
  height: "800px",
  width: "500px",
  display: "flex",
  alignItems: "center",
});

const CardField = styled("div")({
  margin: "10px 0",
  lineBreak: "anywhere",
});

export const Card = ({
  ...props
}: {
  data: PersonResponse | StarshipResponse;
}) => {
  const { data } = props;

  return (
    <MUICardStyled>
      <CardContent>
        {Object.keys(data).map((key, k) => {
          return (
            <CardField key={k}>
              {key} : {data[key as keyof typeof data]}
            </CardField>
          );
        })}
      </CardContent>
    </MUICardStyled>
  );
};
