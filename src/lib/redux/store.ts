import { configureStore } from "@reduxjs/toolkit";
import aboutYouReducer from "./features/about-you/index";
import hairHealthReducer from "./features/hair-health/index";
import internalHealthReducer from "./features/internal-health/index";

const store = configureStore({
  reducer: {
    aboutYou: aboutYouReducer,
    hairHealth: hairHealthReducer,
    internalHealth: internalHealthReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
