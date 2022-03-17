import { all } from "redux-saga/effects";
import getCarSaga from "./cars";

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";
import { carsReducer } from "./reducers/carsReducer";
import reducers from "./reducers";
import { rootSaga } from "./api/saga";


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["app", "locale"],
  };
  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
  }
  const persistedReducer = persistReducer(persistConfig, reducers);
  const redux = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares));
    let persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
  };


export default redux;