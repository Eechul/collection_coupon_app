import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface product {
  id: string;
  name: string;
  point: number;
  number: number;
}

interface modifyProduct {
  id: string;
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
    resetProduct: () => initialState,
    addProduct: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload.map(p => ({
        ...p,
        number: 0
      }))
    },
    plusProduct: (state, action: PayloadAction<modifyProduct>) => {
      const test = state.products.find(p => (p.id === action.payload.id))
      test!.number += 1;
    },
    minusProduct: (state, action: PayloadAction<modifyProduct>) => {
      const test = state.products.find(p => (p.id === action.payload.id))
      if (test!.number == 0) { return }
      test!.number -= 1;
    }
  }
})

export const {
  resetProduct,
  addProduct,
  plusProduct,
  minusProduct
} = product.actions
export default product.reducer