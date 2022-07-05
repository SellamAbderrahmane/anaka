import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export interface ProductState {
  product: any
  status?: "idle" | "loading" | "failed"
}

const initialState: ProductState = {
  product: {},
  status: "idle",
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },

    productInfoLoaded: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.product = action.payload
    },
  },
})

export const { loading, productInfoLoaded } = productSlice.actions

export const currentProductState = (state: RootState) => state.product

export const productReducer = productSlice.reducer
