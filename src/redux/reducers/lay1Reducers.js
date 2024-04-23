import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {
    success: '',
    failure: '',
  },
};

const lay1Reducer = createSlice({
  name: 'lay1',
  initialState,
  reducers: {
    layer1Request: (state, onScuess, onFailure) => {
      state.data.failure = '';  
    },
    layer1Success: (state, action) => {
      state.data.success = action.payload;
    },
    layer1Failure: (state, action) => {
      state.data.failure = action.payload;
    },
  },
});

export const {layer1Request, layer1Success, layer1Failure} =
  lay1Reducer.actions;

export default lay1Reducer.reducer;
