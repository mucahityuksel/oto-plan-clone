import { createAction } from "redux-smart-actions";
import { Car } from "../../components/Cars/car";

import { SagaActionParams } from "../types/saga";
import { takeLatest } from "@redux-saga/core/effects";
import { getFromApi, SagaGenericParams } from "../api";
import { CarDetail } from "../../components/CarD/carDetail";
import { Color, ExtraService, Price } from "../../components/MyGarage/type";
import { Brand, CarLookup } from "../actions";

export const getCarss = createAction(
    "GET_CARS",
    ({ payload, url }: SagaActionParams<Car[]>) => ({
        payload,
        url
    })
);

export const getCarLookupList = createAction(
    "GET_CAR_LOOKUPS",
    ({ payload, url }: SagaActionParams<CarLookup>) => ({
        payload,
        url,
    })
);
export const getCarDetail = createAction(
    "DETAIL_CAR",
    ({ payload, url }: SagaActionParams<CarDetail>) => ({
        payload,
        url
    })

)
export const getExtraService = createAction(
    "GET_EXTRASERVICES",
    ({ payload, url }: SagaActionParams<ExtraService[]>) => ({
        payload,
        url,
    })
);
export const getColorList = createAction(
    "GET_COLORS",
    ({ payload, url }: SagaActionParams<Color[]>) => ({
        payload,
        url,
    })
);
export const getCarPriceList = createAction(
    "GET_CAR_PRICE_LIST",
    ({ payload, url }: SagaActionParams<Price[]>) => ({
        payload,
        url,
    })
);
export const getBrandDetail = createAction(
    "GET_BRAND_DETAIL",
    ({ payload, url }: SagaActionParams<Brand>) => ({
        payload,
        url,
    })
);
export const getFilterCarList = createAction(
    "GET_FILTER_CARS",
    ({ payload, url }: SagaActionParams<Car[]>) => ({
        payload,
        url,
    })
);
const getCarSaga = [
    takeLatest(
        getCarss.toString(),
        (payload: SagaGenericParams<Car[]>) => getFromApi<Car[]>(payload)),
    takeLatest(
        getCarDetail.toString(),
        (payload: SagaGenericParams<CarDetail[]>) => getFromApi<CarDetail[]>(payload)),
    takeLatest(
        getExtraService.toString(),
        (payload: SagaGenericParams<ExtraService[]>) =>
            getFromApi<ExtraService[]>(payload)
    ),
    takeLatest(
        getCarPriceList.toString(),
        (payload: SagaGenericParams<Price[]>) => getFromApi<Price[]>(payload)
    ),
    takeLatest(
        getCarPriceList.toString(),
        (payload: SagaGenericParams<Price[]>) => getFromApi<Price[]>(payload)
    ),
    takeLatest(
        getCarLookupList.toString(),
        (payload: SagaGenericParams<CarLookup>) => getFromApi<CarLookup>(payload)
    ),
    takeLatest(getBrandDetail.toString(), (payload: SagaGenericParams<Brand>) =>
        getFromApi<Brand>(payload)
    ),
    takeLatest(getFilterCarList.toString(), (payload: SagaGenericParams<Car[]>) =>
        getFromApi<Car[]>(payload)
    ),
];

export default getCarSaga