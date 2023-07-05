import { configureStore } from "@reduxjs/toolkit"
import phoneNumberReducer from "./features/phoneNumberSlice"
import certificationNumberReducer from "./features/certificationNumberSlice"
import productReducer from "./features/productSlice"

export const store = configureStore({
  reducer: {
    phoneNumberReducer,
    certificationNumberReducer,
    productReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch