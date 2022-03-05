import React from "react";
import { Card as MUICard, CardContent, CardHeader } from "@mui/material";

export const Card = ({ text, ...props }: any) => {
  const { name } = props;
  return (
    <MUICard>
      <CardHeader title={name} />
      <CardContent>card</CardContent>
    </MUICard>
  );
};
