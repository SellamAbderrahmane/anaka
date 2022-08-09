import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export interface ProductState {
  product: any
  productVariants: any[]
  additionalInfo: any[]
  reviews: any[]
  status?: "idle" | "loading" | "failed" | "reviewsLoading"
}

const initialState: ProductState = {
  product: {},
  reviews: [],
  productVariants: [],
  additionalInfo: [],
  status: "idle",
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },

    reviewsLoading: (state) => {
      state.status = "reviewsLoading"
    },

    productInfoLoaded: (state, action: PayloadAction<any>) => {
      const { product, productVariants, additionalInfo, reviews } = action.payload

      state.status = "idle"
      state.product = product
      state.productVariants = productVariants
      state.additionalInfo = additionalInfo
      state.reviews = reviews
    },

    reviewAdded: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.reviews.push(action.payload)
    }
  },
})

export const { loading, productInfoLoaded, reviewAdded } = productSlice.actions

export const currentProductState = (state: RootState) => state.product

export const productReducer = productSlice.reducer
