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
      state.data.failure = ''; // Corrected variable name here
    },
    producSuccess: (state, action) => {
      state.data.success = action.payload;
    },
    producFailure: (state, action) => {
      state.data.failure = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {productRequest, producSuccess, producFailure} =
productReducer.actions;

export default productReducer.reducer;
