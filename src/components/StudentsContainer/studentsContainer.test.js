import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StudentsContainer } from "./StudentsContainer";

afterEach(() => {
  cleanup();
});

// Test each student data contianer to be in the document
test("Students Data Rendering", () => {
  render(<StudentsContainer />);
  const mxStudentsData = screen.getByTestId("mxStudentsData");
  const usStudentsData = screen.getByTestId("usStudentsData");

  expect(mxStudentsData).toBeInTheDocument();
  expect(usStudentsData).toBeInTheDocument();
});
