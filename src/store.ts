import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sizeReducer from "./reducers/sizeReducer";

const rootReducer = combineReducers({
  size: sizeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
