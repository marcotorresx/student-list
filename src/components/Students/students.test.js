import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Students } from "./Students";

afterEach(() => {
  cleanup();
});

// Test rendering
describe("Student Data", () => {
  const testTitle = "Título de Prueba";
  const data = [];
  render(<Students title={testTitle} data={data} />);
  const studentsData = screen.getByTestId("dataTitle");

  // Test correct rendering
  test("Correct Rendering", () => {
    expect(studentsData).toBeInTheDocument();
  });

  // Test correct title
  test("Correct Title", () => {
    expect(studentsData).toHaveTextContent(testTitle);
  });
});
