/**
 * Filters out odd numbers and return only even number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const even = (numberArray: number[]) => {
  return numberArray.filter((number) => number % 2 === 0);
};

/**
 * Filters out even numbers and return only odd number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const odd = (numberArray: number[]) => {
  return numberArray.filter((number) => number % 2 !== 0);
};

/**
 * Filter and sort an array or numbers
 *
 * If not options are passed then the a copy of the original array should be returned.
 * The function should handle if only on or the other of the options are passed.
 *
 * @param arrayOfNumbers number[]
 * @param options { sortBy: "even" | "odd", sortDirection: "asc" | "desc"}
 * @returns number[]
 */
export const multiFunctional = (
  arrayOfNumbers: number[],
  options?: { filterBy?: "even" | "odd"; sortDirection?: "asc" | "desc" }
) => {
  const filterBy = options?.filterBy;
  const sortDirection = options?.sortDirection;
  const noOptions = !options || Object.keys(options)?.length === 0;

  if (noOptions) {
    return [...arrayOfNumbers];
  }

  return sortFunction(filterFunction(arrayOfNumbers, filterBy), sortDirection);
};

function filterFunction(arrayOfNumbers: number[], filterBy?: "even" | "odd") {
  if (filterBy) {
    const isEven = filterBy === "even";
    const filterPredicate = (numberInArray: number) =>
      isEven ? numberInArray % 2 == 0 : numberInArray % 2 !== 0;
    return arrayOfNumbers.filter(filterPredicate);
  }
  return [...arrayOfNumbers];
}
function sortFunction(arrayOfNumbers: number[], sortBy?: "asc" | "desc") {
  if (sortBy) {
    const isAscending = sortBy === "asc";
    const sortOrder = (a: number, b: number) => (isAscending ? a - b : b - a);
    return [...arrayOfNumbers].sort(sortOrder);
  }
  return [...arrayOfNumbers];
}
