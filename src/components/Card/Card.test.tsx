import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Card } from "./Card";

test("renders card", () => {
  render(<Card text="card" />);
  const start = screen.getByText(/card/i);
  expect(start).toBeInTheDocument();
});
