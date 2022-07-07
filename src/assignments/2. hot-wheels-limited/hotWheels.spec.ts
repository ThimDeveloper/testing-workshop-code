import { hotWheels } from "./hotWheels";
import { categorizedByManufacturer, categorizedByModel } from "./fixtures";
import { apiClient } from "../../mocks";

describe("hotWheels", () => {
  // What is this?!
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it("should categorize by manufacturer", () => {
    const api_cars = apiClient.getRecentSoldCars();
    const result = hotWheels({
      response: api_cars, 
      categorizeBy: "manufacturer"
    });
    console.log(result);
    expect(result).toEqual(categorizedByManufacturer);
  });
  
  it("should categorize by model", () => {
    const api_cars = apiClient.getRecentSoldCars();
    const result = hotWheels({
      response: api_cars, 
      categorizeBy: "model"
    });
    expect(result).toEqual(categorizedByModel);
  });
});


/*You are responsible to write two tests that should test if the hotWheels function can categorize cars by 
`manufacturer` and by `model`.

Each tests should follow the format:
1. Use the API to get the most recently created cars.
2. Use the hotWheels function to categorize by `manufacturer` or `model`.
3. Pass the result to the expect function and ensure that your function works as intended.*/