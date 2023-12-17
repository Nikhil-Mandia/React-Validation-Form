import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootSlice";

const store = configureStore({
  reducer: {
    custom: reducer,
  },
});
export default store;
  