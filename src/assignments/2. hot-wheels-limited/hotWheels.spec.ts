import { hotWheels } from "./hotWheels";
import { categorizedByManufacturer, categorizedByModel } from "./fixtures";
import { apiClient } from "../../mocks/apis/hot-wheels-limited-api";

describe("hotWheels", () => {
  it("should categorize by manufacturer", () => {
    const apiResponse = apiClient.getRecentSoldCars();
    const result = hotWheels({
      response: apiResponse,
      categorizeBy: "manufacturer",
    });

    expect(result).toEqual(categorizedByManufacturer);
  });
  it("should categorize by model", () => {
    const apiResponse = apiClient.getRecentSoldCars();
    const result = hotWheels({
      response: apiResponse,
      categorizeBy: "model",
    });
    expect(result).toEqual(categorizedByModel);
  });
});
