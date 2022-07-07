/**
 * Filters out odd numbers and return only even number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const even = (numberArray: number[]) => {
  numberArray = numberArray.filter(number => (number % 2) == 0)
  return numberArray;
};

/**
 * Filters out even numbers and return only odd number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const odd = (numberArray: number[]) => {
  numberArray = numberArray.filter(number => (number % 2) != 0)
  return numberArray;
};

/**
 * Filter and sort an array or numbers
 *
 * If not options are passed then the a copy of the original array should be returned.
 * The function should handle if only on or the other of the options are passed.
 *
 * @param arrayOfNumbers number[]
 * @param options { filterBy: "even" | "odd", sortBy: "asc" | "desc"}
 * @returns number[]
 */
export const multiFunctional = (
  arrayOfNumbers: number[],
  options?: { filterBy?: "even" | "odd"; sortBy?: "asc" | "desc" }
) => {
  if (!options) return arrayOfNumbers;

  arrayOfNumbers = options.filterBy == "even" ? even(arrayOfNumbers) : odd(arrayOfNumbers)
  options.sortBy == "asc" ? arrayOfNumbers.sort(function(a, b){return a-b}) : arrayOfNumbers.sort(function(a, b){return b-a});
  return arrayOfNumbers;
};
