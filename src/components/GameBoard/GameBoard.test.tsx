import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { GameBoard } from "./GameBoard";

test("renders Game Board", () => {
  render(<GameBoard />);
  const helloWorld = screen.getByText(/This is Game Board!/i);
  expect(helloWorld).toBeInTheDocument();
});
