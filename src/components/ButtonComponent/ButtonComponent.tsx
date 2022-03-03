import React from "react";
import { Button } from "@mui/material";

interface OwnProps {
  onClick: () => void;
  text: string;
}

export const ButtonComponent = ({ onClick, text }: OwnProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};
