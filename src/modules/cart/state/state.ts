import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

declare type STATUS = "idle" | "loading" | "failed" | "wishLoading" | "compareLoading"
export interface CartState {
  cartItems: any[]
  wishItems: any[]
  compareItems: any[]
  cartTotalPrice: number
  status?: STATUS
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
    loading: (state, action: PayloadAction<STATUS>) => {
      state.status = action?.payload || 'loading'
    },

    changeCartItems: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.cartItems = action.payload
      state.cartTotalPrice = action.payload.reduce((acc: number, item: any) => {
        return acc + item.finalPrice
      }, 0)
    },

    changeWishItems: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.wishItems = action.payload
    },

    changeCompareItems: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.compareItems = action.payload
    }
  },
})

export const { loading, changeCartItems, changeWishItems, changeCompareItems } = cartSlice.actions

export const currentCartState = (state: RootState) => state.cart

export const cartReducer = cartSlice.reducer
