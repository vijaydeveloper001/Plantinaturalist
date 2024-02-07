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
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      // It doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      state.data.failure = ''; // Corrected variable name here
    },
    layer1Success: (state, action) => {
      // Corrected action name here
      // state.data.success = state
      state.data.success = action.payload;
    },
    layer1Failure: (state, action) => {
      // Corrected action name here
      state.data.failure = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {layer1Request, layer1Success, layer1Failure} =
  lay1Reducer.actions;

export default lay1Reducer.reducer;
