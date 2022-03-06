import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Scoreboard } from "./Scoreboard";

test("renders Game Board", () => {
  render(<Scoreboard score={{ firstPlayer: 20, secondPlayer: 30 }} />);
  const firstScore = screen.getByText(/20/i);
  const secondScore = screen.getByText(/30/i);
  expect(firstScore).toBeInTheDocument();
  expect(secondScore).toBeInTheDocument();
  expect(screen.getByText(/First player/i)).toBeInTheDocument();
  expect(screen.getByText(/Second player/i)).toBeInTheDocument();
});
