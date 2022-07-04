import { HotWheelsCarData } from "mocks/apis/generator";
import { HotWheelsApiResponse } from "mocks/apis/hot-wheels-limited-api";

interface HotWheelsParams {
  response: HotWheelsApiResponse;
  categorizeBy: string;
}

export const hotWheels = (
  parameters: HotWheelsParams
): Record<string, HotWheelsCarData[]> => {
  const categorizedDataBase: Record<string, HotWheelsCarData[]> = {};
  const { categorizeBy, response } = parameters;
  const { data } = response;
  const { cars } = data;

  return cars.reduce((acc, curr) => {
    return {};
  }, categorizedDataBase);
};
