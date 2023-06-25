import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CertificationNumberState = {
  value: string;
}

const initialState = {
  value: ""
} as CertificationNumberState

export const certificationNumber = createSlice({
  name: "certificationNumber",
  initialState,
  reducers: {
    reset: () => initialState,
    addNumber: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    deleteNumber: (state) => {
      state.value = state.value.substring(0, state.value.length - 1)
    }
  }
})

export const {
  reset,
  addNumber,
  deleteNumber
} = certificationNumber.actions
export default certificationNumber.reducer