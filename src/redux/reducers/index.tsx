import {combineReducers} from "redux"
import { carsReducer } from "./carsReducer";
import garageCart, { GarageCartReducer } from "../garage";

const reducers = combineReducers({
    garage: garageCart.reducers
});

export default reducers

export interface RootState {
    garage : GarageCartReducer,
}