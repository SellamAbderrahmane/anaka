import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export interface ContactState {
  status?: "idle" | "loading" | "failed" | "dailyLoading"
}

const initialState: ContactState = {
  status: "idle",
}

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },
    subscribeSuccess: (state) => {
      state.status = "idle"
    },
  },
})

export const { loading, subscribeSuccess } = contactSlice.actions

export const contactState = (state: RootState) => state.contact

export const contactReducer = contactSlice.reducer
