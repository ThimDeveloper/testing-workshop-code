/**
 * Filters out odd numbers and return only even number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const even = (numberArray: number[]) => {
  let temp_number_array: Array<number> = []
  numberArray.map(function(ele_val, index) {
    if (ele_val % 2 == 0){
      temp_number_array.push(ele_val)

    }
    })

  return temp_number_array;
};

/**
 * Filters out even numbers and return only odd number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const odd = (numberArray: number[]) => {
  let temp_number_array: Array<number> = []
  numberArray.filter(function(ele_val, index) {
    if (ele_val % 2 == 1){

      temp_number_array.push(ele_val)

    }
    })

  return temp_number_array;
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
  options?: { sortBy?: "even" | "odd"; sortDirection?: "asc" | "desc" }
) => {

if (options) {
  if (options.sortBy == 'even' ){
    arrayOfNumbers = even(arrayOfNumbers)
  }
  else if (options.sortBy == 'odd' ){
    arrayOfNumbers = odd(arrayOfNumbers)
    
  }

  if (options.sortDirection == 'asc'){
    arrayOfNumbers.sort(function(x,y) {
      return x-y
  });
  }else if (options.sortDirection == 'desc'){
    arrayOfNumbers.sort(function(x,y) {
      return y-x
  });

  }
}

  return arrayOfNumbers;
};

