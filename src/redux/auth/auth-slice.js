import { createSlice } from '@reduxjs/toolkit';

import { signIn, logIn, logOut, getCurrentUser } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isLogin = true;
      state.user = payload.user;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isLogin = true;
      state.user = payload.user;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = '';
      state.isLogin = false;
      state.user.name = '';
      state.user.email = '';
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
      state.isRefreshed = false;
    },
    [getCurrentUser.pending]: (state, { payload }) => {
      state.isRefreshed = true;
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      state.token = '';
      state.isRefreshed = false;
    },
  },
});

export const authSlicer = authSlice.reducer;
