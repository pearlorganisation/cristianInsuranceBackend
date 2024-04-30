// -------------------------------------------Imports----------------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// ------------------------------------------------------------------------------------------------------

const reducer = combineReducers({});

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
