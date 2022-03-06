import React from "react";
import { Button as MUIButton } from "@mui/material";

interface OwnProps {
  disabled?: boolean;
  onClick: () => void;
  text: string;
}

export const Button = ({ disabled = false, onClick, text }: OwnProps) => {
  return (
    <MUIButton disabled={disabled} onClick={onClick}>
      {text}
    </MUIButton>
  );
};
