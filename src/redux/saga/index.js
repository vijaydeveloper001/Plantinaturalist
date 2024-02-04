import { Lay1DataSaga } from "./Layer1Saga";
import { all } from "redux-saga/effects";
export function* rootSaga() {
    yield all([
        Lay1DataSaga()
    ])
  }