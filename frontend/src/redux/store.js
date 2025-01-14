import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/BasketSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
