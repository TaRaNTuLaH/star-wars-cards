import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

test("renders hello world", () => {
  render(<App />);
  const helloWorld = screen.getByText(/Hello world/i);
  expect(helloWorld).toBeInTheDocument();
});
