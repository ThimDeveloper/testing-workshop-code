export interface HotWheelsCarData {
  manufacturer: string;
  model: string;
}

export const generateCarData = (): { cars: HotWheelsCarData[] } => ({
  cars: [
    {
      manufacturer: "Tesla",
      model: "S",
    },
    {
      manufacturer: "Tesla",
      model: "S",
    },
    {
      manufacturer: "Ford",
      model: "Aspire",
    },
    {
      manufacturer: "Ford",
      model: "Classic",
    },
    {
      manufacturer: "Tesla",
      model: "3",
    },
    {
      manufacturer: "Tesla",
      model: "3",
    },
    {
      manufacturer: "Tesla",
      model: "3",
    },
    {
      manufacturer: "Tesla",
      model: "X",
    },
    {
      manufacturer: "Tesla",
      model: "Y",
    },
    {
      manufacturer: "Ford",
      model: "Aspire",
    },
    {
      manufacturer: "Ford",
      model: "Truck",
    },
    {
      manufacturer: "Ford",
      model: "Truck",
    },
    {
      manufacturer: "Ford",
      model: "Truck",
    },
    {
      manufacturer: "Fiat",
      model: "Panda",
    },
    {
      manufacturer: "Fiat",
      model: "Uno",
    },
    {
      manufacturer: "Fiat",
      model: "Uno",
    },
    {
      manufacturer: "Fiat",
      model: "Argo",
    },
    {
      manufacturer: "Fiat",
      model: "Argo",
    },
    {
      manufacturer: "Fiat",
      model: "Argo",
    },
    {
      manufacturer: "Fiat",
      model: "Argo",
    },
    {
      manufacturer: "Fiat",
      model: "Argo",
    },
  ],
});
