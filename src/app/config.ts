import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "./store"
import { AxiosClient } from "../data/axios.client"

export interface CONFIGSTATE {
  http: AxiosClient | null
  wishItems?: number
  storeinfo?: any
  currency?: any
  status?: "idle" | "loading" | "failed"
}

const initialState: CONFIGSTATE = {
  http: null,
  wishItems: 0,
  storeinfo: {},
  currency: {},
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

      state.status = "idle"
      state.http = data.http
      state.storeinfo = data.storeinfo
      state.currency = data.currency
    },
    addToCart: (state, action: PayloadAction<number>) => {},
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
        currency: {
          currencyRate: 12,
          currencySymbol: "$",
        },
        storeinfo: {
          tel: "+012 345 678 102",
          email: "yourname@email.com",
          website: "yourwebsitename.com",
          address: "Address goes here",
          street: "street, Crossroad 123.",
          socials: [{ name: "facebook" }, { name: "instagram" }],
        },
      })
    )
  } catch (error) {}
}

export default config.reducer
