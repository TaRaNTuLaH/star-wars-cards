import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ButtonComponent } from "./ButtonComponent";

test("renders Game Board", () => {
  render(<ButtonComponent onClick={() => {}} text="start" />);
  const start = screen.getByText(/start/i);
  expect(start).toBeInTheDocument();
});
