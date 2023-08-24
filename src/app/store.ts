import { configureStore } from "@reduxjs/toolkit";
import educationLevelReducer from "../features/education/educationLevelSlice";

export const store = configureStore({
  reducer: {
    educationLevel: educationLevelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
