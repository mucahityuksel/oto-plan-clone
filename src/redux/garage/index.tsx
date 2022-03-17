import { createAction } from "redux-smart-actions";
import { GarageCartItem } from "../../components/MyGarage/type";
import { KomutRedux } from "../types/komut";
import produce from "immer";
import { RootState } from "../reducers";
import { createSelector } from "reselect";

const ADD_GARAGE = "ADD_GARAGE";
const UPDATE_GARAGE = "UPDATE_GARAGE";
const REMOVE_GARAGE = "REMOVE_GARAGE";


export interface GarageCartReducer {
    garageCartItems: GarageCartItem[];
}
export interface GarageCartActions {
    addToGarage: any;
    removeToGarage: any;
    updateGarageItem: any;

}

const garageCart = new KomutRedux<GarageCartReducer, GarageCartActions>();

garageCart.setInitialState({
    garageCartItems: [],
});

garageCart.setActions({
    addToGarage: createAction(ADD_GARAGE, (payload: GarageCartItem) => ({
        payload,
    })),
    removeToGarage: createAction(REMOVE_GARAGE, (payload: GarageCartItem) => ({
        payload,
    })),

    updateGarageItem: createAction(
        UPDATE_GARAGE,
        (payload: GarageCartItem) => ({
            payload,
        })
    ),

});


garageCart.setRedusers(
    produce((draft: GarageCartReducer, { type, payload }) => {
      switch (type) {
        case ADD_GARAGE:
          draft.garageCartItems = [...draft.garageCartItems, payload];
          break;
       
        case REMOVE_GARAGE:
          draft.garageCartItems = draft.garageCartItems.filter(
            (x) => x.Id !== payload.Id
          );
          break;
        
       
      }
    }, garageCart.initialState)
  );
  
  
  
  
  
  
  
  
  
  
const garageCartState = (state: RootState) => state.garage.garageCartItems;
export const garageCartSelector = createSelector(
    [garageCartState],
    (state) => state
)
export default garageCart;
