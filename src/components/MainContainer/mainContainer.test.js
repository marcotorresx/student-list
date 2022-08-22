import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainContainer } from "./mainContainer";

afterEach(() => {
  cleanup();
});

// Test rendering
test("Main Container Rendering", () => {
  render(<MainContainer />);
  const mainContainer = screen.getByTestId("mainContainer");
  expect(mainContainer).toBeInTheDocument();
});
