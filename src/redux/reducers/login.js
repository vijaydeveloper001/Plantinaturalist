import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {
    success: '',
    failure: '',
  },
};

const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
     loginRequest: (state, onScuess, onFailure) => {
      state.data.failure = '';  
    },
     loginSuccess: (state, action) => {
      state.data.success = action.payload;
    },
     loginFailure: (state, action) => {
      state.data.failure = action.payload;
    },
  },
});

export const { loginRequest,  loginSuccess,  loginFailure} =
  loginReducer.actions;

export default loginReducer.reducer;
