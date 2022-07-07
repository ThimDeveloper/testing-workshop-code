import { hotWheels } from "./hotWheels";
import { categorizedByManufacturer, categorizedByModel } from "./fixtures";
import { apiClient, HotWheelsCarData } from "../../mocks";

describe("hotWheels", () => {
  // What is this?!
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should categorize by manufacturer", () => {
    let cars = apiClient.getRecentSoldCars()
    let result = hotWheels({
      "response": cars,
      "categorizeBy": "manufacturer"})
    expect(result).toEqual(categorizedByManufacturer);
  });
  it("should categorize by model", () => {
    const result = null;
    expect(result).toEqual(categorizedByModel);
  });
});
