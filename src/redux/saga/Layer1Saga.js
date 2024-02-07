import {takeLatest, call, put} from 'redux-saga/effects';
import {getResponse} from '../../api/Api';
import {PRODUCT} from '../../Contants/apiUrl';
import {layer1Failure, layer1Request, layer1Success} from '../reducers/lay1Reducers';

function* fetchUserData(action) {
 console.log(action.payload.payload)
  try {
    const response = yield call(getResponse,action.payload.payload);
    yield put(layer1Success(response));
    action.payload.scuess(response)
      // yield onScuess(response);
    

  } catch (error) {
    console.log(error,'awesdrfghj')
    yield put(layer1Failure(error));
    action.payload.scuess(response)
   
  }
}

export function* Lay1DataSaga() {
  yield takeLatest(layer1Request, fetchUserData);
}
//fetchUse
