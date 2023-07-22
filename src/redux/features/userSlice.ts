import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface user {
  id: string;
  phoneNumber: string;
  myPoint: number;
  createdAt: string;
}

type UserState = {
  user: user,
  usePoint: number,
  savePoint: number
}

const initialState = {
  user: {},
  usePoint: 0,
  savePoint: 0
} as UserState

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReset: () => initialState,
    setUser: (state, action: PayloadAction<user>) => {
      state.user = action.payload
    },
    setUsePoint: (state, action: PayloadAction<number>) => {
      state.usePoint = action.payload
    },
    setSavePoint: (state, action: PayloadAction<number>) => {
      state.savePoint = action.payload
    }
  }
})

export const {
  userReset,
  setUser,
  setUsePoint,
  setSavePoint
} = user.actions
export default user.reducer