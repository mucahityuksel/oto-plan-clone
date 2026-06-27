import { call } from "@redux-saga/core/effects";
import { ApiCallback } from "../types/saga";
import { mockApi } from "../../mocks/mockApi";

export interface SagaGenericParams<Type> {
  type: string;
  payload: ApiCallback<Type>;
  url: string;
}

export function getData(url: string, actionType: string) {
  return mockApi(actionType, url);
}

export function* getFromApi<Type>({
  payload,
  url,
  type,
}: SagaGenericParams<Type>): any {
  try {
    const res = yield call(getData, url, type);
    payload.onSuccess(res.data.Message, res.data.Result);
  } catch (error) {
    payload.onError("Mock veri yüklenirken hata oluştu");
  }
}
