import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export interface CartState {
  cartItems: any[]
  wishItems: any[]
  compareItems: any[]
  cartTotalPrice: number
  status?: "idle" | "loading" | "failed"
}

const initialState: CartState = {
  cartItems: [],
  wishItems: [],
  compareItems: [],
  cartTotalPrice: 0,
  status: "idle",
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },

    changeCartItems: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.cartItems = action.payload
      state.cartTotalPrice = action.payload.reduce((acc: number, item: any) => {
        return acc + item.finalPrice
      }, 0)
    },
  },
})

export const { loading, changeCartItems } = cartSlice.actions

export const currentCartState = (state: RootState) => state.cart

export const cartReducer = cartSlice.reducer
