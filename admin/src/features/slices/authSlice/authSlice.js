import { createSlice } from "@reduxjs/toolkit";
// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
  isLoading: false,
  isSuccess: false,
  isUserLoggedIn: false,
  loggedInUserData: {},
};

// -------------------------------------- Slices------------------------------------------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = action.payload.loginStatus;
    },
    logout: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

// ===========================================Exports==================================================
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
