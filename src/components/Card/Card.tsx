import React from "react";
import { Card as MUICard, CardContent } from "@mui/material";

export const Card = ({ ...props }: any) => {
  const { data } = props;

  return (
    <MUICard>
      <CardContent>
        {Object.keys(data).map((key, k) => {
          return (
            <div key={k}>
              {key} : {data[key]}
            </div>
          );
        })}
      </CardContent>
    </MUICard>
  );
};
