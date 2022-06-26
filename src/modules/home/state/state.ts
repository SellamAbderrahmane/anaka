import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export interface HomeState {
  heroProducts: any[]
  dailyProducts: any[]
  status?: "idle" | "loading" | "failed" | "dailyLoading"
}

const initialState: HomeState = {
  heroProducts: [],
  dailyProducts: [],
  status: "idle",
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },

    dailyLoading: (state) => {
      state.status = "dailyLoading"
    },

    heroProductsLoad: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.heroProducts = action.payload
    },

    dailyProductsLoaded: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.dailyProducts = action.payload
    },

    subscribeSuccess: (state) => {
      state.status = "idle"
    },
  },
})

export const { loading, heroProductsLoad, dailyLoading, dailyProductsLoaded, subscribeSuccess } = homeSlice.actions

export const currentHomeState = (state: RootState) => state.home

export const homeReducer = homeSlice.reducer
