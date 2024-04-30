// -------------------------------------------Imports----------------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "../features/slices/authSlice/authSlice";

// ------------------------------------------------------------------------------------------------------

const reducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/clearReduxStoreData") {
    state = undefined;
    localStorage.clear();
    sessionStorage.clear();
  }
  return reducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  //   middleware: (getDefaultMiddleware) => {
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     });
  //   },
});
