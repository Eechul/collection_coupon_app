import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface product {
  id: string;
  name: string;
  price: string;
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
    reset: () => initialState,
    addProduct: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload.map(p => ({
        ...p,
        number: 0
      }))
    },
    plusProduct: (state, action: PayloadAction<modifyProduct>) => {
      const test = state.products.find(p => (p.id === action.payload.id))
      console.log("test1", test)
      test!.number += 1;
    },
    minusProduct: (state, action: PayloadAction<modifyProduct>) => {
      const test = state.products.find(p => (p.id === action.payload.id))
      console.log("test2", test)
      if (test!.number == 0) { return }
      test!.number -= 1;
    }
  }
})

export const {
  reset,
  addProduct,
  plusProduct,
  minusProduct
} = product.actions
export default product.reducer