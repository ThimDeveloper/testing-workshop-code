import { addition, subtraction, division, multiplication } from "./math";

describe("math", () => {
  describe("addition", () => {
    it("should add two numbers together", () => {
      const result = addition(1, 1);
      expect(result).toBe(2);
    });
  });
  describe("subtraction", () => {
    it("should subtract the second number from the first", () => {
      const result = subtraction(2, 1);
      expect(result).toBe(1);
    });
  });
  describe("multiplication", () => {
    it("should multiplu two numbers", () => {
      const result = multiplication(2, 2);
      expect(result).toBe(4);
    });
  });
  describe("division", () => {
    it("should divide the first number with the second", () => {
      const result = division(4, 2);
      expect(result).toBe(2);
    });
  });
});
