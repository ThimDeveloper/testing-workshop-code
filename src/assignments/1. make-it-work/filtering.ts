/**
 * Filters out odd numbers and return only even number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const even = (numberArray: number[]) => {
  numberArray = numberArray.filter((n) => n % 2 == 0)
  return numberArray;
};

/**
 * Filters out even numbers and return only odd number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const odd = (numberArray: number[]) => {
  numberArray = numberArray.filter((n) => n % 2 != 0)
  return numberArray;
};

/**
 * Filter and sort an array or numbers
 *
 * If not options are passed then the a copy of the original array should be returned.
 * The function should handle if only one or the other of the options are passed.
 *
 * @param arrayOfNumbers number[]
 * @param options { sortBy: "even" | "odd", sortDirection: "asc" | "desc"}
 * @returns number[]
 */ //TODO SKRIV OM
export const multiFunctional = (arrayOfNumbers: number[], options?: { sortBy?: "even" | "odd"; sortDirection?: "asc" | "desc" }
) => {
  if (options?.sortBy == undefined || options?.sortDirection == undefined){
    return arrayOfNumbers;
  }

  else if (options?.sortBy == undefined && options?.sortDirection == "asc"){
    return arrayOfNumbers.sort();
  }

  else if (options?.sortBy == undefined && options?.sortDirection == "desc"){
    return arrayOfNumbers.sort().reverse();
  }

  else if (options?.sortBy == "even" && options?.sortDirection == undefined){
    return even(arrayOfNumbers);
  }

  else if (options?.sortBy == "odd" && options?.sortDirection == undefined){
    return odd(arrayOfNumbers);
  }

  else if (options?.sortBy == "odd" && options?.sortDirection == "asc"){
    return odd(arrayOfNumbers).sort();
  }

  else if (options?.sortBy == "even" && options?.sortDirection == "asc"){
    return even(arrayOfNumbers).sort();
  }

  else if (options?.sortBy == "odd" && options?.sortDirection == "desc"){
    return odd(arrayOfNumbers).sort().reverse();
  }

  else if (options?.sortBy == "even" && options?.sortDirection == "desc"){
    return even(arrayOfNumbers).sort().reverse();
  }

  else {
    return arrayOfNumbers;
  }
};
