import {Lay1DataSaga} from "./layer1Saga";
import { all } from "redux-saga/effects";
import { productDataSaga } from "./productSaga";
export function* rootSaga() {
    yield all([
        Lay1DataSaga(),
        productDataSaga(),
    ])
  }