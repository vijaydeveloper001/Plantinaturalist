import {applyMiddleware, combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga';
import {reducer} from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    ...reducer
  });
const store = configureStore({
    reducer: rootReducer,
    middleware:[sagaMiddleware]
  });
sagaMiddleware.run(rootSaga);

export default store
