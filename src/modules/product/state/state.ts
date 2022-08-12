import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

declare type STATUS = "idle" | "loading" | "failed" | "reviewsLoading"
export interface ProductState {
  product: any
  productVariants: any[]
  additionalInfo: any[]
  relatedProducts: any[]
  reviews: any[]
  status?: STATUS
}

const initialState: ProductState = {
  product: {},
  reviews: [],
  productVariants: [],
  additionalInfo: [],
  relatedProducts: [],
  status: "idle",
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loading: (state, action?: PayloadAction<STATUS>) => {
      state.status = action.payload
    },

    productInfoLoaded: (state, action: PayloadAction<any>) => {
      const { product, productVariants, additionalInfo, reviews, relatedProducts } = action.payload

      state.status = "idle"
      state.product = product
      state.productVariants = productVariants
      state.additionalInfo = additionalInfo
      state.reviews = reviews
      state.relatedProducts = relatedProducts
    },

    reviewAdded: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.reviews.push(action.payload)
    },
  },
})

export const { loading, productInfoLoaded, reviewAdded } = productSlice.actions

export const currentProductState = (state: RootState) => state.product

export const productReducer = productSlice.reducer
