import { numberGenerator } from "./numberGenerator";

describe("numberGenerator", () => {
  it("should return three random numbers in a sequence", () => {
    const randomSequence = numberGenerator.generateSequence();
    expect(randomSequence).toHaveLength(3);
  });
});
