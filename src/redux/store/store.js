// import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import {rootSaga} from '../saga';
// import {reducer} from '../reducers/index';
// import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const persistConfig = {
//   key: 'root',
//   storage:AsyncStorage,
// };
// const sagaMiddleware = createSagaMiddleware();
// // const rootReducer = combineReducers({
// //   ...reducer,
// // });
// const persistedReducer = persistReducer(persistConfig, reducer);
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [sagaMiddleware],
// });
// export let persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);

// export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga';
import { reducer } from '../reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

// Define your rootReducer by combining reducers
const rootReducer = combineReducers({
  // Make sure you spread out the individual reducers if reducer is an object
  ...reducer,
});

// Wrap your combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with middleware and reducers
const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

// Run your sagas
sagaMiddleware.run(rootSaga);

// Export the store and persistor
export { store };
export const persistor = persistStore(store);
