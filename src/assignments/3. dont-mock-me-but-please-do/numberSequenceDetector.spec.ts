import { numberGenerator } from "./numberGenerator";
import {
  createNumberSequenceDetector,
  detectionPatterns,
} from "./numberSequenceDetector";
const numberSequenceDetector = createNumberSequenceDetector();

jest.mock("./numberGenerator", () => {
  const actual = jest.requireActual("./numberGenerator");
  return {
    ...actual,
    numberGenerator: {
      generateSequence: jest.fn(),
    },
  };
});
interface TestCase {
  inputPattern: number[];
  expected: boolean;
}
describe("numberSequenceDetector", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it.each`
    inputPattern            | expected
    ${detectionPatterns[0]} | ${true}
    ${detectionPatterns[1]} | ${true}
    ${detectionPatterns[2]} | ${true}
    ${[0, 0, 0]}            | ${false}
  `(
    "should return $expected for $inputPattern",
    ({ inputPattern, expected }: TestCase) => {
      (numberGenerator.generateSequence as jest.Mock).mockReturnValueOnce(
        inputPattern
      );
      const sequence = numberGenerator.generateSequence();
      const result = numberSequenceDetector.detectSequence(sequence);
      expect(result).toBe(expected);
    }
  );
});
