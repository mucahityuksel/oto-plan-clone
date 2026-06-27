import { Price } from "../../components/MyGarage/type";
import { mockCars } from "./cars";

const periods = [
  { Id: "p1000001-0000-4000-8000-000000000001", PeriodCount: 12 },
  { Id: "p1000002-0000-4000-8000-000000000002", PeriodCount: 24 },
  { Id: "p1000003-0000-4000-8000-000000000003", PeriodCount: 36 },
  { Id: "p1000004-0000-4000-8000-000000000004", PeriodCount: 48 },
];

const kmLimits = [
  { Id: "k1000001-0000-4000-8000-000000000001", KMLimitPerYear: 10000 },
  { Id: "k1000002-0000-4000-8000-000000000002", KMLimitPerYear: 15000 },
  { Id: "k1000003-0000-4000-8000-000000000003", KMLimitPerYear: 20000 },
  { Id: "k1000004-0000-4000-8000-000000000004", KMLimitPerYear: 25000 },
];

function buildPricesForCar(carId: string, basePrice: number): Price[] {
  const prices: Price[] = [];
  let index = 0;

  for (const period of periods) {
    for (const km of kmLimits) {
      const periodDiscount = (period.PeriodCount / 12) * 0.05;
      const kmFactor = km.KMLimitPerYear / 10000;
      const monthlyPrice = Math.round(
        basePrice * (1 - periodDiscount) * (0.85 + kmFactor * 0.05)
      );

      prices.push({
        Id: `price-${carId}-${index++}`,
        CarId: carId,
        PeriodId: period.Id,
        PeriodCount: period.PeriodCount,
        KMLimitId: km.Id,
        KMLimitPerYear: km.KMLimitPerYear,
        PricePerMonth: monthlyPrice,
      });
    }
  }

  return prices;
}

export const mockPricesByCarId: Record<string, Price[]> = Object.fromEntries(
  mockCars.map((car) => [
    car.Id,
    buildPricesForCar(car.Id, car.StartingPrice),
  ])
);

export function getPricesByCarId(carId: string): Price[] {
  return mockPricesByCarId[carId] ?? mockPricesByCarId[mockCars[0].Id];
}
