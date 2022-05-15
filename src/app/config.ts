import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "./store"
import { AxiosClient } from "../data/axios.client"

export interface CONFIGSTATE {
  http: AxiosClient | null
  status?: "idle" | "loading" | "failed"
}

const initialState: CONFIGSTATE = {
  http: null,
  status: "loading",
}

export const config = createSlice({
  name: "config",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },
    loaded: (state, action: PayloadAction<any>) => {
      const data = action.payload

      state.http = data.http
      state.status = "idle"
    },
  },
})

export const configState = (state: RootState) => state.config

export const { loaded, loading } = config.actions

export const loadConfig = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())

    const axios = new AxiosClient({ baseURL: "http://localhost:3001/api" }, "TOKEN")

    dispatch(
      loaded({
        http: axios,
      })
    )
  } catch (error) {}
}

export default config.reducer
