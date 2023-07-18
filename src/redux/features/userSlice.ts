import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface user {
  id: string;
  phoneNumber: string;
  myPoint: number;
  createdAt: string;
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