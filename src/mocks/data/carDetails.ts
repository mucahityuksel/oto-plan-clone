import { CarDetail } from "../../components/CarD/carDetail";
import { mockCars } from "./cars";
import { lookupMaps } from "./lookups";

const galleryImages = [
  "/images/cars/car-1.jpg",
  "/images/cars/car-2.jpg",
  "/images/cars/car-3.jpg",
  "/images/cars/car-4.jpg",
];

function buildImageSet(mainImage: string) {
  return {
    FrontImage: mainImage,
    FrontRightImage: galleryImages[1],
    SideImage: galleryImages[2],
    RearImage: galleryImages[3],
    InsideImage: galleryImages[0],
  };
}

function buildCarDetail(car: (typeof mockCars)[0]): CarDetail {
  const brandId = lookupMaps.brandIds[car.CarBrand];
  const modelKey = `${car.CarBrand}-${car.CarModel}`;
  const modelId = lookupMaps.modelIds[modelKey];

  const similarCars = mockCars
    .filter((c) => c.Id !== car.Id)
    .slice(0, 3)
    .map((similar) => ({
      Id: `sim-${similar.Id}`,
      CarId: car.Id,
      SimilarCarId: similar.Id,
      CarName: `${similar.CarBrand} ${similar.CarModel}`,
      CarImage: similar.MainImage,
      SimilarCar: similar,
    }));

  const consumptionParts = car.Consumption.split(" - ").map(Number);
  const carbonParts = car.Carbon.split(" - ").map(Number);

  return {
    Id: car.Id,
    CarPackId: `pack-${car.Id}`,
    CarPack: car.CarPack,
    CarVersionId: `ver-${car.Id}`,
    CarVersion: car.CarVersion,
    CarModelId: modelId,
    CarModel: car.CarModel,
    CarBrandId: brandId,
    CarBrand: car.CarBrand,
    DetailTitle: `${car.CarBrand} ${car.CarModel} ${car.CarVersion}`,
    DetailDescription: car.ShortDescription,
    ShortTitle: car.ShortTitle,
    ShortDescription: car.ShortDescription,
    CarImages: {
      Id: `img-${car.Id}`,
      CarId: car.Id,
      ...buildImageSet(car.MainImage),
    },
    CarSpecs: {
      Id: `spec-${car.Id}`,
      CarId: car.Id,
      FuelType: car.FuelType.trim(),
      FuelTypeId: lookupMaps.fuelTypeIds[car.FuelType.trim()],
      GearType: car.GearType.trim(),
      GearTypeId: lookupMaps.gearTypeIds[car.GearType.trim()],
      BodyType: car.BodyType,
      BodyTypeId: lookupMaps.bodyTypeIds[car.BodyType],
      Enginecc: 1600,
      HorsePower: Number(car.HorsePower),
      ConsumptionMin: consumptionParts[0] || 0,
      ConsumptionMax: consumptionParts[1] || 0,
      CarbonDioxideMin: carbonParts[0] || 0,
      CarbonDioxideMax: carbonParts[1] || 0,
    },
    HasCampaign: car.HasCampaign,
    CampaignText: car.CampaignText,
    Active: car.Active,
    StartingPrice: car.StartingPrice,
    ShowStartingPrice: car.ShowStartingPrice,
    SimilarCars: similarCars,
    Prices: [],
  };
}

export const mockCarDetails: Record<string, CarDetail> = Object.fromEntries(
  mockCars.map((car) => [car.Id, buildCarDetail(car)])
);

export function getCarDetailById(carId: string): CarDetail {
  return mockCarDetails[carId] ?? mockCarDetails[mockCars[0].Id];
}
