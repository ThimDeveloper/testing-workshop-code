const detectionPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 9, 9],
];
export const createNumberSequenceDetector = () => {
  let sequenceCache: number[] = [];

  return {
    detectSequence: (numbers: number[]) => {
      sequenceCache.push(...numbers);
      const match = detectionPatterns.some((pattern) =>
        sequenceCache.toString().includes(pattern.toString())
      );
      sequenceCache = [];
      return match;
    },
  };
};
