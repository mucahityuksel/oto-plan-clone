import { CarDetail } from "../CarD/carDetail";

export interface GarageCartItem {
    Id?: string;
    Price?: Price;
    Car?: CarDetail;
    Count: number;
    ExtraServices: ExtraService[];
    Insurance?: boolean;
    Color?: Color;
}

export interface ExtraService {
    Id: string;
    Code: string;
    Name: string;
    Description: string;
    Count?: number;
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
export interface Color {
    Id: string;
    Name: string;
}
