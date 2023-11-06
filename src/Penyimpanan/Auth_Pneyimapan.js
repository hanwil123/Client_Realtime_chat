// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    tokenuser: null,
  },
  reducers: {
    setTokenUser: (state, action) => {
      state.tokenuser = action.payload;
    },
  },
});

export const { setTokenUser } = authSlice.actions;
export const selectTokenUser = (state) => state.auth.tokenuser;

export default authSlice.reducer;
