import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./contactSlice";
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authReducer,
  },
});