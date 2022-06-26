import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
import { Paginator } from "../../../utils"

export interface ShopState {
  products?: any[]
  pagination?: Paginator
  error?: string | null
  status?: "idle" | "loading" | "failed"
}

const initialState: ShopState = {
  products: [],
  error: null,
  status: "idle",
  pagination: {
    total: 0,
    limit: 17,
    offset: 0,
    currentPage: 1,
  },
}

export const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },

    productsLoaded: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.products = action.payload?.products
      state.pagination = action.payload?.pagination
    },
  },
})

export const { loading, productsLoaded } = ShopSlice.actions

export const ShopState = (state: RootState) => state.shop

export const ShopReducer = ShopSlice.reducer
