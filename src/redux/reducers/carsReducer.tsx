import { CarDetail } from "../../components/CarD/carDetail"
import { Car } from "../../components/Cars/car"
import { GarageCartItem } from "../../components/MyGarage/type"
import garage from "../garage"


interface State {
    cars? : Car[],
    selectedCar? : CarDetail[],
    garage? : GarageCartItem[]
}

const initialState = {
    cars : [],
    selectedCar : [],
    garage : []
}

export  const carsReducer = (state :State = initialState, action:any) => {
    
    switch (action.type) {
        case "GET_CARS":
         
            return {
                cars : action.payload
            }
        case "DETAIL_CAR":
          
            return {
                selectedCar :action.payload,
                
            }
        default:
            return state;
    }
}
