import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type PhoneNumberState = {
  value: string;
}

const initialState = {
  value: "010-"
} as PhoneNumberState

export const phoneNumber = createSlice({
  name: "phoneNumber",
  initialState,
  reducers: {
    reset: () => initialState,
    addNumber: (state, action: PayloadAction<number>) => {
      const t = state.value + (state.value.length === 8 ? '-' + action.payload : action.payload)
      if (t.length <= 13) { state.value = t.length === 8 ? t + '-' : t }
    },
    deleteNumber: (state) => {
      if (state.value.length === 4) { return; }
      let t = state.value.substring(0, state.value.length - 1)
      if (state.value.length !== 5 && t[t.length - 1] === '-') { t = t.substring(0, t.length - 1) }
      state.value = t
    }
  }
})

export const {
  reset,
  addNumber,
  deleteNumber
} = phoneNumber.actions
export default phoneNumber.reducer