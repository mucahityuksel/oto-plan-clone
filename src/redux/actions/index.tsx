import { Car } from "../../components/Cars/car";

export interface FilterObject {
  brand: string[];
  model: string[];
  bodyType: string[];
  fuelType: string[];
  gearType: string[];
}

export interface CarLookup {
    GearTypes: GearType[];
    BodyTypes: BodyType[];
    FuelTypes: FuelType[];
    Brands: Brand[];
    Cars: Car[];
    Periods: Period[];
    CarBrandDetailDto: Brand[];
    KMLimits: KMLimit[];
    CarModels: Model[];
}

export interface Model {
    Id: string;
    ModelName: string;
    CarBrandId: string;
    BrandName: string;
}
export interface GearType {
    Id: string;
    Name: string;
  }
  export interface BodyType {
    Id: string;
    Name: string;
  }
  export interface FuelType {
    Id: string;
    Name: string;
  }
  export interface Brand {
    Id: string;
    BrandName: string;
    BrandLogo: string;
    CarModels: Model[];
  }
  export interface Period {
    Id: string;
    PeriodCount: number;
  }
  export interface KMLimit {
    KMLimitPerYear: string;
    Id: string;
  }
            