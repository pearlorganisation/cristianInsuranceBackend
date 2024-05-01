// -------------------------------------------Imports----------------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "../features/slices/authSlice/authSlice";
import blog from "./slices/blog";
import faq from "./slices/faq";

// ------------------------------------------------------------------------------------------------------

const reducer = combineReducers({
  auth: authReducer,
  blog,
  faq,
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
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false,
      })
    
});
