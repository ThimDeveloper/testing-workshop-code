import type { HotWheelsCarData, HotWheelsApiResponse } from "../../mocks";

interface HotWheelsParams {
  response: HotWheelsApiResponse;
  categorizeBy: "manufacturer" | "model";
}

export const hotWheels = (
  parameters: HotWheelsParams
): Record<string, HotWheelsCarData[]> => {
  const categorizedDataBase: Record<string, HotWheelsCarData[]> = {};
  const cars = parameters.response.data.cars
  const brand = {}

  cars.forEach(car => {
    categorizedDataBase{...brand}
  });
  
  return categorizedDataBase;
};
