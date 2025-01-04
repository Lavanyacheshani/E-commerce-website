import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./ReduxSlice/categorySlice";
import userReducer from "./ReduxSlice/userSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    user: userReducer,
  },
});

export default store;