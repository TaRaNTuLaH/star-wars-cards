import React from "react";
import { Button as MUIButton } from "@mui/material";
import { styled } from "@mui/material/styles";

interface OwnProps {
  disabled?: boolean;
  onClick: () => void;
  text: string;
}

const MUIButtonStyled = styled(MUIButton)({
  backgroundColor: "black",
  color: "#FFE917",
  border: "1px solid #FFE917",
  borderRadius: "5%",
  "&:disabled": {
    color: "gray",
  },
});

export const Button = ({ disabled = false, onClick, text }: OwnProps) => {
  return (
    <MUIButtonStyled disabled={disabled} onClick={onClick}>
      {text}
    </MUIButtonStyled>
  );
};
