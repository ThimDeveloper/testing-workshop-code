import { hotWheels } from "./hotWheels";
import { apiClient } from "../../mocks/apis/hot-wheels-limited-api";

describe("hotWheels", () => {
  it("should categorize by manufacturer", () => {
    const apiResponse = apiClient.getRecentSoldCars();
    const result = hotWheels({
      response: apiResponse,
      categorizeBy: "manufacturer",
    });

    expect(result).toEqual();
  });
  it("should categorize by model", () => {
    const apiResponse = apiClient.getRecentSoldCars();
    const result = hotWheels({
      response: apiResponse,
      categorizeBy: "model",
    });
  });
});
