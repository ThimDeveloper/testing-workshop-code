import { even, odd, multiFunctional } from "./filtering";
describe("filtering", () => {
  describe("even", () => {
    it("should return only even numbers", () => {
      expect(even([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
  });
  describe("odd", () => {
    it("should return only odd numbers", () => {
      expect(odd([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
    });
  });
  describe("multiFunctional", () => {
    it("should return a copy of array if no options passed", () => {
      const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
      const result = multiFunctional(arrayOfNumbers);
      expect(result).not.toBe(arrayOfNumbers);
      expect(result).toEqual(arrayOfNumbers);
    });
    it("should return a copy of array if empty options passed", () => {
      const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
      const result = multiFunctional(arrayOfNumbers, {});
      expect(result).not.toBe(arrayOfNumbers);
      expect(result).toEqual(arrayOfNumbers);
    });

    interface TestCase {
      filterBy: "even" | "odd" | undefined;
      sortDirection: "asc" | "desc" | undefined;
      input: number[];
      expected: number[];
    }
    it.each`
      filterBy     | sortDirection | input                 | expected
      ${"even"}    | ${undefined}  | ${[1, 2, 3, 4, 5, 6]} | ${[2, 4, 6]}
      ${"odd"}     | ${undefined}  | ${[1, 2, 3, 4, 5, 6]} | ${[1, 3, 5]}
      ${undefined} | ${"asc"}      | ${[1, 3, 2, 6, 5, 4]} | ${[1, 2, 3, 4, 5, 6]}
      ${undefined} | ${"desc"}     | ${[1, 3, 2, 6, 5, 4]} | ${[6, 5, 4, 3, 2, 1]}
      ${"even"}    | ${"asc"}      | ${[1, 2, 3, 4, 5, 6]} | ${[2, 4, 6]}
      ${"even"}    | ${"desc"}     | ${[1, 2, 3, 4, 5, 6]} | ${[6, 4, 2]}
      ${"odd"}     | ${"asc"}      | ${[1, 2, 3, 4, 5, 6]} | ${[1, 3, 5]}
      ${"odd"}     | ${"desc"}     | ${[1, 2, 3, 4, 5, 6]} | ${[5, 3, 1]}
    `(
      "should return $expected, when $input is filtered by: $filterBy and sorted by $sortBy ",
      ({ filterBy, sortDirection, input, expected }: TestCase) => {
        expect(multiFunctional(input, { filterBy, sortDirection })).toEqual(
          expected
        );
      }
    );
  });
});
