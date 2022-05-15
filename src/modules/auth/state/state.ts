import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export interface AuthState {
  user?: any
  repository?: null
  loggedIn?: boolean
  error?: string | null
  status?: "idle" | "loading" | "failed"
}

const initialState: AuthState = {
  user: null,
  error: null,
  status: "loading",
  repository: null,
  loggedIn: false,
}

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
      state.loggedIn = false
    },

    loginSuccess: (state, action: PayloadAction<any>) => {
      state.status = "idle"
      state.loggedIn = true
      state.user = action.payload
    },

    loginError: (state, action: PayloadAction<any>) => {
      state.user = null
      state.loggedIn = false
      state.status = "failed"
      state.error = action.payload
    },
  },
})

export const { loading, loginSuccess, loginError } = authSlice.actions

export const currentAuthState = (state: RootState) => state.auth

export const authReducer = authSlice.reducer
