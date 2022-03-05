import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "./Button";

test("renders Game Board", () => {
  render(<Button onClick={() => {}} text="start" />);
  const start = screen.getByText(/start/i);
  expect(start).toBeInTheDocument();
});
