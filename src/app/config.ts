import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "./store"
import { AxiosClient, Status } from "../data/axios.client"
import { TOKEN } from "../utils"

import { toast } from "react-toastify"

const modal = {
  info: (title: string, msg: string) => {
    toast.info(msg)
  },
  success: (title: string, msg: string) => {
    toast.success(msg)
  },
  error: (title: string, msg: string) => {
    toast.error(msg)
  },
  warning: (title: string, msg: string) => {
    toast.warning(msg)
  },
}

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
    }
  },
})

export const configState = (state: RootState) => state.config

export const { loaded, loading } = config.actions

export const loadConfig = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())

    const axios = new AxiosClient(
      { baseURL: "http://localhost:3001/v1" },
      TOKEN,
      (type: "success" | "info" | "warning" | "error", title: string, message: string) => {
        if (modal[type]) {
          modal[type](title, message)
        } else {
          console.log(message)
        }
      }
    )

    const storeInfo = await getStoreInfo(axios)

    dispatch(
      loaded({
        http: axios,
        ...storeInfo
      })
    )
  } catch (error) {}
}

const getStoreInfo = async (http: AxiosClient) => {
  const result = await http.fetch({
    url: '/store/info',
    method: 'GET'
  })

  if(result.status === Status.ERROR) {
    throw Error(result.message)
  }

  return result.storeInfo
}

export default config.reducer
