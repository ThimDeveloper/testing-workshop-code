import { superSmartTeslaCar } from "./branching";
describe("branching", () => {
  describe("superSmartTeslaCar", () => {
    interface TestCase {
      direction: "left" | "right";
      nextAction: "break" | "gas";
      expected: string;
    }
    it.each`
      direction  | nextAction | expected
      ${"left"}  | ${"gas"}   | ${"Turning left and then gas"}
      ${"left"}  | ${"break"} | ${"Turning left and then break"}
      ${"right"} | ${"gas"}   | ${"Turning right and then gas"}
      ${"right"} | ${"break"} | ${"Turning right and then break"}
    `(
      "should return '$expected' when direction: $direction and nextAction: $nextAction",
      ({ direction, nextAction, expected }: TestCase) => {
        expect(superSmartTeslaCar({ direction, nextAction })).toEqual(expected);
      }
    );
  });
});
