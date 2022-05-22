import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
});
