import type { HotWheelsCarData, HotWheelsApiResponse } from "../../mocks";

interface HotWheelsParams {
  response: HotWheelsApiResponse;
  categorizeBy: "manufacturer" | "model";
}

export const hotWheels = (
  parameters: HotWheelsParams
): Record<string, HotWheelsCarData[]> => {
  const categorizedDataBase: Record<string, HotWheelsCarData[]> = {};
  const { response, categorizeBy } = parameters;
  const { data } = response;
  const { cars } = data;
  return cars.reduce((acc, curr) => {
    const { model, manufacturer } = curr;
    switch (categorizeBy) {
      case "manufacturer": {
        const previousValues = acc?.[manufacturer] || [];
        return { ...acc, [manufacturer]: [...previousValues, curr] };
      }
      case "model": {
        const previousValues = acc?.[model] || [];
        return { ...acc, [model]: [...previousValues, curr] };
      }
      default: {
        return acc;
      }
    }
  }, categorizedDataBase);
};
