import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface product {
  id: string;
  name: string;
  price: string;
  number: number;
}

type ProductState = {
  products: product[]
}

const initialState = {
  products: []
} as ProductState

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
    // id에 맞는 상품 개수를 늘리고 줄이는 액션이 필요함
  }
})

export const {
  reset
} = product.actions
export default product.reducer