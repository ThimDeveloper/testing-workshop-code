import type { HotWheelsCarData, HotWheelsApiResponse } from "../../mocks";

interface HotWheelsParams {
  response: HotWheelsApiResponse;
  categorizeBy: "manufacturer" | "model";
}

export const hotWheels = (parameters: HotWheelsParams): Record<string, HotWheelsCarData[]> => {

  let cars = parameters.response.data.cars;
  let categorizeBy = parameters.categorizeBy
  cars.reduce()
  console.log(cars)
  // Läs på om reduce, switch sats på categorizeBy
  console.log('category',categorizeBy)
  if (categorizeBy == "manufacturer"){





  }else{

  }

  const categorizedDataBase: Record<string, HotWheelsCarData[]> = {};
  return categorizedDataBase;


};
