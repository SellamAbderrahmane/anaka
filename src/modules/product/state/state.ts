import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export interface ProductState {
  product: any
  productVariants: any[]
  additionalInfo: any[]
  status?: "idle" | "loading" | "failed"
}

const initialState: ProductState = {
  product: {},
  additionalInfo: [],
  productVariants: [],
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
      const { product, productVariants, additionalInfo} = action.payload

      state.status = "idle"
      state.product = product
      state.productVariants = productVariants
      state.additionalInfo = additionalInfo
    },
  },
})

export const { loading, productInfoLoaded } = productSlice.actions

export const currentProductState = (state: RootState) => state.product

export const productReducer = productSlice.reducer
