import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../features/countrySlice"
import thunk from "redux-thunk"

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
