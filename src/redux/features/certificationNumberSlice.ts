import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CertificationNumberState = {
  value: string;
  starValue: string;
}

const initialState = {
  value: "",
  starValue: ""
} as CertificationNumberState

export const certificationNumber = createSlice({
  name: "certificationNumber",
  initialState,
  reducers: {
    reset: () => initialState,
    addNumber: (state, action: PayloadAction<number>) => {
      if (state.value.length == 4 && state.starValue.length == 4) { return; }
      state.value += action.payload
      state.starValue += "*"
    },
    deleteNumber: (state) => {
      if (state.value.length == 0 && state.starValue.length == 0) { return; }
      state.value = state.value.substring(0, state.value.length - 1)
      state.starValue = state.starValue.substring(0, state.starValue.length - 1)
    }
  }
})

export const {
  reset,
  addNumber,
  deleteNumber
} = certificationNumber.actions
export default certificationNumber.reducer