import { Car } from "../Cars/car";

export interface CarDetail {
    Id: string;
    CarPackId: string;
    CarPack: string;
    CarVersionId: string;
    CarVersion: string;
    CarModelId: string;
    CarModel: string;
    CarBrandId: string;
    CarBrand: string;
    DetailTitle: string;
    DetailDescription: string;
    ShortTitle: string;
    ShortDescription: string;
    CarImages: CarImages;
    CarSpecs: CarSpecs;
    HasCampaign: boolean;
    CampaignText: string;
    Active: boolean;
    StartingPrice: number;
    ShowStartingPrice: boolean;
    SimilarCars: SimilarCar[];
    Prices: Price[];
  }
  export interface Price {
    Id: string;
    CarId: string;
    PeriodId: string;
    PeriodCount: number;
    KMLimitId: string;
    KMLimitPerYear: number;
    PricePerMonth: number;
  }
  
export interface SimilarCar {
    Id: string;
    CarId: string;
    SimilarCarId: string;
    CarName: string;
    CarImage: string;
    SimilarCar: Car;
  }
  interface CarSpecs {
    Id: string;
    CarId: string;
    FuelType: string;
    FuelTypeId: string;
    GearType: string;
    GearTypeId: string;
    BodyType: string;
    BodyTypeId: string;
    Enginecc: number;
    HorsePower: number;
    ConsumptionMin: number;
    ConsumptionMax: number;
    CarbonDioxideMin: number;
    CarbonDioxideMax: number;
  }
  interface CarImages {
    Id: string;
    CarId: string;
    FrontRightImage: string;
    FrontImage: string;
    SideImage: string;
    RearImage: string;
    InsideImage: string;
  }
  