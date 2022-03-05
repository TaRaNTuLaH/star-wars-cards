import React from "react";
import { Button as MUIButton } from "@mui/material";

interface OwnProps {
  onClick: () => void;
  text: string;
}

export const Button = ({ onClick, text }: OwnProps) => {
  return <MUIButton onClick={onClick}>{text}</MUIButton>;
};
