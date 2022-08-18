import { getUsGrade } from "./App";

test("US Grade", () => {
  expect(getUsGrade(91)).toBe("A-");
});
