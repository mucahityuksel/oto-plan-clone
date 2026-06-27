import { Car } from "../components/Cars/car";
import { mockCars } from "./data/cars";
import { getCarDetailById } from "./data/carDetails";
import { mockColors } from "./data/colors";
import { mockExtraServices } from "./data/extraServices";
import { getBrandById, lookupMaps, mockCarLookup } from "./data/lookups";
import { getPricesByCarId } from "./data/prices";

export interface MockApiResponse<T> {
  data: {
    Message: string;
    Result: T;
  };
}

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function parseQueryIds(value: string | null): string[] {
  if (!value || value === "undefined") return [];
  return value.split(",").filter((v) => v && v !== "undefined");
}

function filterCars(queryString: string): Car[] {
  if (!queryString || !queryString.includes("=")) {
    return mockCars;
  }

  const normalized = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;
  const params = new URLSearchParams(normalized);

  const brandIds = parseQueryIds(params.get("brand"));
  const modelIds = parseQueryIds(params.get("model"));
  const bodyTypeIds = parseQueryIds(params.get("bodyType"));
  const fuelTypeIds = parseQueryIds(params.get("fuelType"));
  const gearTypeIds = parseQueryIds(params.get("gearType"));

  const hasFilters =
    brandIds.length > 0 ||
    modelIds.length > 0 ||
    bodyTypeIds.length > 0 ||
    fuelTypeIds.length > 0 ||
    gearTypeIds.length > 0;

  if (!hasFilters) {
    return mockCars;
  }

  return mockCars.filter((car) => {
    if (brandIds.length) {
      if (
        !brandIds.some((id) => lookupMaps.brandById[id] === car.CarBrand)
      ) {
        return false;
      }
    }

    if (modelIds.length) {
      const modelKey = `${car.CarBrand}-${car.CarModel}`;
      const carModelId = lookupMaps.modelIds[modelKey];
      if (!modelIds.includes(carModelId)) {
        return false;
      }
    }

    if (bodyTypeIds.length) {
      if (
        !bodyTypeIds.some(
          (id) => lookupMaps.bodyById[id] === car.BodyType
        )
      ) {
        return false;
      }
    }

    if (fuelTypeIds.length) {
      if (
        !fuelTypeIds.some(
          (id) => lookupMaps.fuelById[id] === car.FuelType.trim()
        )
      ) {
        return false;
      }
    }

    if (gearTypeIds.length) {
      if (
        !gearTypeIds.some(
          (id) => lookupMaps.gearById[id] === car.GearType.trim()
        )
      ) {
        return false;
      }
    }

    return true;
  });
}

function resolveByUrl(url: string): unknown {
  if (url.includes("?")) {
    return filterCars(url);
  }

  if (UUID_REGEX.test(url)) {
    const brand = getBrandById(url);
    if (brand) return brand;

    const carDetail = getCarDetailById(url);
    if (carDetail) return carDetail;

    const prices = getPricesByCarId(url);
    if (prices.length) return prices;
  }

  return null;
}

export function mockApi<T>(
  actionType: string,
  url = ""
): Promise<MockApiResponse<T>> {
  let result: unknown;

  switch (actionType) {
    case "GET_CARS":
      result = mockCars;
      break;
    case "GET_CAR_LOOKUPS":
      result = mockCarLookup;
      break;
    case "DETAIL_CAR":
      result = url ? getCarDetailById(url) : getCarDetailById(mockCars[0].Id);
      break;
    case "GET_EXTRASERVICES":
      result = mockExtraServices;
      break;
    case "GET_COLORS":
      result = mockColors;
      break;
    case "GET_CAR_PRICE_LIST":
      result = url ? getPricesByCarId(url) : getPricesByCarId(mockCars[0].Id);
      break;
    case "GET_BRAND_DETAIL":
      result = url
        ? getBrandById(url)
        : mockCarLookup.CarBrandDetailDto[0];
      break;
    case "GET_FILTER_CARS":
      result = filterCars(url);
      break;
    default: {
      const urlResult = resolveByUrl(url);
      result = urlResult ?? mockCars;
    }
  }

  return Promise.resolve({
    data: {
      Message: "OK",
      Result: result as T,
    },
  });
}
