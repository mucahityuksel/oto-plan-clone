import { CarLookup } from "../../redux/actions";
import { mockCars } from "./cars";

const brandIds: Record<string, string> = {
  Ford: "a1000001-0000-4000-8000-000000000001",
  Fiat: "a1000002-0000-4000-8000-000000000002",
  Volvo: "a1000003-0000-4000-8000-000000000003",
  Volkswagen: "a1000004-0000-4000-8000-000000000004",
  BMW: "a1000005-0000-4000-8000-000000000005",
};

const modelIds: Record<string, string> = {
  "Ford-Focus": "b2000001-0000-4000-8000-000000000001",
  "Fiat-Doblo": "b2000002-0000-4000-8000-000000000002",
  "Volvo-V60 Cross Country": "b2000003-0000-4000-8000-000000000003",
  "Volkswagen-Passat": "b2000004-0000-4000-8000-000000000004",
  "BMW-3 Serisi": "b2000005-0000-4000-8000-000000000005",
};

const fuelTypeIds: Record<string, string> = {
  Dizel: "c3000001-0000-4000-8000-000000000001",
  Benzin: "c3000002-0000-4000-8000-000000000002",
};

const gearTypeIds: Record<string, string> = {
  Manuel: "d4000001-0000-4000-8000-000000000001",
  Otomatik: "d4000002-0000-4000-8000-000000000002",
};

const bodyTypeIds: Record<string, string> = {
  SUV: "e5000001-0000-4000-8000-000000000001",
  Minivan: "e5000002-0000-4000-8000-000000000002",
  "Station Wagon": "e5000003-0000-4000-8000-000000000003",
  Sedan: "e5000004-0000-4000-8000-000000000004",
};

export const lookupMaps = {
  brandIds,
  modelIds,
  fuelTypeIds,
  gearTypeIds,
  bodyTypeIds,
  brandById: Object.fromEntries(
    Object.entries(brandIds).map(([name, id]) => [id, name])
  ),
  modelById: Object.fromEntries(
    Object.entries(modelIds).map(([key, id]) => {
      const [brand, ...modelParts] = key.split("-");
      return [id, { brand, model: modelParts.join("-") }];
    })
  ),
  fuelById: Object.fromEntries(
    Object.entries(fuelTypeIds).map(([name, id]) => [id, name])
  ),
  gearById: Object.fromEntries(
    Object.entries(gearTypeIds).map(([name, id]) => [id, name])
  ),
  bodyById: Object.fromEntries(
    Object.entries(bodyTypeIds).map(([name, id]) => [id, name])
  ),
};

const uniqueBrands = Array.from(new Set(mockCars.map((c) => c.CarBrand)));
const uniqueModelKeys = Array.from(
  new Set(mockCars.map((c) => `${c.CarBrand}-${c.CarModel}`))
);

const buildModelsForBrand = (brandName: string) =>
  uniqueModelKeys
    .filter((key) => key.startsWith(`${brandName}-`))
    .map((key) => {
      const model = key.split("-").slice(1).join("-");
      return {
        Id: modelIds[key],
        ModelName: model,
        CarBrandId: brandIds[brandName],
        BrandName: brandName,
      };
    });

export const mockCarLookup: CarLookup = {
  GearTypes: Array.from(new Set(mockCars.map((c) => c.GearType.trim()))).map(
    (name) => ({ Id: gearTypeIds[name], Name: name })
  ),
  BodyTypes: Array.from(new Set(mockCars.map((c) => c.BodyType))).map((name) => ({
    Id: bodyTypeIds[name],
    Name: name,
  })),
  FuelTypes: Array.from(new Set(mockCars.map((c) => c.FuelType.trim()))).map(
    (name) => ({ Id: fuelTypeIds[name], Name: name })
  ),
  Brands: uniqueBrands.map((name) => ({
    Id: brandIds[name],
    BrandName: name,
    BrandLogo: "",
    CarModels: buildModelsForBrand(name),
  })),
  Cars: mockCars,
  Periods: [
    { Id: "p1000001-0000-4000-8000-000000000001", PeriodCount: 12 },
    { Id: "p1000002-0000-4000-8000-000000000002", PeriodCount: 24 },
    { Id: "p1000003-0000-4000-8000-000000000003", PeriodCount: 36 },
    { Id: "p1000004-0000-4000-8000-000000000004", PeriodCount: 48 },
  ],
  CarBrandDetailDto: uniqueBrands.map((name) => ({
    Id: brandIds[name],
    BrandName: name,
    BrandLogo: "",
    CarModels: buildModelsForBrand(name),
  })),
  KMLimits: [
    { Id: "k1000001-0000-4000-8000-000000000001", KMLimitPerYear: "10000" },
    { Id: "k1000002-0000-4000-8000-000000000002", KMLimitPerYear: "15000" },
    { Id: "k1000003-0000-4000-8000-000000000003", KMLimitPerYear: "20000" },
    { Id: "k1000004-0000-4000-8000-000000000004", KMLimitPerYear: "25000" },
  ],
  CarModels: uniqueModelKeys.map((key) => {
    const [brand, ...modelParts] = key.split("-");
    const model = modelParts.join("-");
    return {
      Id: modelIds[key],
      ModelName: model,
      CarBrandId: brandIds[brand],
      BrandName: brand,
    };
  }),
};

export function getBrandById(brandId: string) {
  return mockCarLookup.CarBrandDetailDto.find((b) => b.Id === brandId);
}
