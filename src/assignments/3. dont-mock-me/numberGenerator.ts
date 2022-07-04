const MAX_NUMBER_TO_GENERATE = 10000;
export const numberGenerator = {
  generateSequence: () => {
    let sequence: number[] = [];
    for (let i = 0; i < 3; i++) {
      sequence.push(Math.floor(Math.random() * MAX_NUMBER_TO_GENERATE));
    }
    return sequence;
  },
};
