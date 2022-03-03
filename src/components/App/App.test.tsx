import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

test("renders App", () => {
  render(<App />);
  expect(screen.getByText("Play again")).toBeInTheDocument();
});
