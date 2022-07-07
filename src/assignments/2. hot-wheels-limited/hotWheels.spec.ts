import { hotWheels } from "./hotWheels";
import { categorizedByManufacturer, categorizedByModel } from "./fixtures";
import { apiClient } from "../../mocks";

describe("hotWheels", () => {
  // What is this?!
  beforeEach(() => {
    jest.clearAllMocks();
  });
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
    const result = hotWheels({ response: apiResponse, categorizeBy: "model" });
    expect(result).toEqual(categorizedByModel);
  });

  it("should not categorize on tires", () => {
    const apiResponse = apiClient.getRecentSoldCars();
    const result = hotWheels({
      response: apiResponse,
      categorizeBy: "tires" as any,
    });
    expect(result).toEqual({});
  });
});
