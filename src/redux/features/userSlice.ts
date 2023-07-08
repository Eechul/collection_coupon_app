import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface user {
  id: string;
  name: string;
  phoneNumber: string;
  myPoint: number;
}

type UserState = {
  user: user
}

const initialState = {
  user: {}
} as UserState

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action: PayloadAction<user>) => {
      state.user = action.payload
    }
  }
})

export const {
  reset,
  setUser
} = user.actions
export default user.reducer