import { generateCarData } from "./generator";

export const apiClient = {
  getRecentSoldCars: () => {
    const carData = generateCarData();
    return { data: carData };
  },
};

export type HotWheelsApiResponse = ReturnType<
  typeof apiClient.getRecentSoldCars
>;
