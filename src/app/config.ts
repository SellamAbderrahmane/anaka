import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "./store"
import { AxiosClient } from "../data/axios.client"

export interface CONFIGSTATE {
  http: AxiosClient | null
  cartItems?: number
  wishItems?: number
  status?: "idle" | "loading" | "failed"
}

const initialState: CONFIGSTATE = {
  http: null,
  wishItems: 0,
  cartItems: 0,
  status: "loading",
}

export const config = createSlice({
  name: "config",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },
    loaded: (state, action: PayloadAction<CONFIGSTATE>) => {
      const data = action.payload

      state.http = data.http
      state.status = "idle"
      state.cartItems = data.cartItems
    },
    addToCart: (state, action: PayloadAction<number>) => {
      state.cartItems += action.payload
    },
  },
})

export const configState = (state: RootState) => state.config

export const { loaded, loading, addToCart } = config.actions

export const loadConfig = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())

    const axios = new AxiosClient({ baseURL: "http://localhost:3001/api" }, "TOKEN")

    dispatch(
      loaded({
        http: axios,
        cartItems: 10,
      })
    )
  } catch (error) {}
}

export default config.reducer
