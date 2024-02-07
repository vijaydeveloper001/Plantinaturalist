import lay1Reducer from './lay1Reducers';
import productReducer from './producReducers';

// export const reducers = configureStore({
//   reducer: {
//     lay1:Lay1Reducer,
//   }
// })

export const reducer = {
  lay1: lay1Reducer,
  product:productReducer,
};
