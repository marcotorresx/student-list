import { getUsGrade, getUSFormat } from "./App";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

afterEach(() => {
  cleanup();
});

// Test file input
test("Upload File", async () => {
  render(<App />);

  const testImageFile = new File(["hello"], "hello.png", { type: "image/png" }); // Test file
  const fileInput = screen.getByTestId("fileInput");

  userEvent.upload(fileInput, testImageFile); // When user uploads file
  expect(fileInput.files.length).toBe(1); // There should be one file
});

// Test functions
test("US Grade", () => {
  expect(getUsGrade(99)).toBe("A");
  expect(getUsGrade(91)).toBe("A-");
  expect(getUsGrade(88)).toBe("B+");
  expect(getUsGrade(85)).toBe("B");
  expect(getUsGrade(81)).toBe("B-");
  expect(getUsGrade(78)).toBe("C+");
  expect(getUsGrade(75)).toBe("C");
  expect(getUsGrade(71)).toBe("C-");
});

test("US Format", () => {
  const data = {
    Index: "4",
    Name: "Diego Araque Fernandez",
    ID: "2",
    Graduation: "10/08/2022",
    Grade: "99",
  };
  const result = {
    Index: "4",
    Name: "Diego Araque",
    ID: "2@tec.mx",
    Graduation: "08/10/2022",
    Grade: "A",
  };
  expect(getUSFormat(data)).toMatchObject(result);
  const data2 = {
    Index: "8",
    Name: "Jose Juan Perez",
    ID: "bvoeribovwe",
    Graduation: "21/11/2024",
    Grade: "65",
  };
  const result2 = {
    Index: "8",
    Name: "Jose Juan",
    ID: "bvoeribovwe@tec.mx",
    Graduation: "11/21/2024",
    Grade: "D",
  };
  expect(getUSFormat(data2)).toMatchObject(result2);
});
