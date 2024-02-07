import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {
    success: '',
    failure: '',
  },
};

const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productRequest: (state, onScuess, onFailure) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      // It doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      state.data.failure = ''; // Corrected variable name here
    },
    producSuccess: (state, action) => {
      // Corrected action name here
      // state.data.success = state
      state.data.success = action.payload;
    },
    producFailure: (state, action) => {
      // Corrected action name here
      state.data.failure = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {productRequest, producSuccess, producFailure} =
productReducer.actions;

export default productReducer.reducer;
