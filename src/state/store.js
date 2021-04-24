import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance"
import userReducer from "./user"
import resultsReducer from "./results"
import logger from "redux-logger";

const store = configureStore({
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      user: userReducer,
      results: resultsReducer,
      balance: balanceReducer
    },
  });
  
  export default store;