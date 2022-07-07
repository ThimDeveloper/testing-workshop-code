import  { addition, subtraction, division, multiplication } from "./math";

describe("math", () => {
    describe("addition", () => {
        it("should add two numbers together", () => {
            const result = addition(1, 1);
            expect(result).toBe(2);
        });
    });
});

describe("math", () => {
    describe("subtraction", () => {
        it("should subtract two numbers", () => {
            const result = subtraction(1, 1);
            expect(result).toBe(0);
        });
    });
});

describe("math", () => {
    describe("division", () => {
        it("should divide two numbers", () => {
            const result = division(1, 1);
            expect(result).toBe(1);
        });
    });
});

describe("math", () => {
    describe("multiplication", () => {
        it("should multiply two numbers", () => {
            const result = multiplication(1, 1);
            expect(result).toBe(1);
        });
    });
});