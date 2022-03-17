import { all } from "redux-saga/effects";
import getCarSaga from "../cars";

export function* rootSaga() {
    yield all([...getCarSaga]);
}