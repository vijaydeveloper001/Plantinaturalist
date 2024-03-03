import {takeLatest, call, put} from 'redux-saga/effects';
import {getResponse} from '../../api/Api';
import { producFailure, producSuccess, productRequest } from '../reducers/producReducers';

function* fetchUserData(action) {
 console.log(action.payload.payload)
  try {
    const response = yield call(getResponse,action.payload.payload);
    yield put(producSuccess(response));
    action.payload.scuess(response)
      // yield onScuess(response);
    

  } catch (error) {
    console.log(error,'awesdrfghj')
    yield put(producFailure('Error'));
    action.payload.scuess(response)
   
  }
}

export function* productDataSaga() {
  yield takeLatest(productRequest, fetchUserData);
}
//fetchUse
