import type { HotWheelsCarData, HotWheelsApiResponse } from "../../mocks";

interface HotWheelsParams {
  response: HotWheelsApiResponse;
  categorizeBy: "manufacturer" | "model";
}

export const hotWheels = (
  parameters: HotWheelsParams
): Record<string, HotWheelsCarData[]> => {
  const categorizedDataBase: Record<string, HotWheelsCarData[]> = {};
  console.log("Test", categorizedDataBase);
  return categorizedDataBase;
};
