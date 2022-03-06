import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Card } from "./Card";

test("renders card", () => {
  render(<Card data={{ name: "someName" }} />);
  const someName = screen.getByText(/someName/i);
  expect(someName).toBeInTheDocument();
});
