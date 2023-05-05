import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import itemReducer from "./reducers/itemReducer";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";

const store = configureStore({
  reducer: {
    item: itemReducer,
    error: errorReducer,
    auth: authReducer,
  },
  preloadedState: {},
  middleware: [thunk],
});

export default store;
