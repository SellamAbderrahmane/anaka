import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export interface HomeState {
  repository?: any,
  value: number
  status?: "idle" | "loading" | "failed"
}

const initialState: HomeState = {
  repository: null,
  value: 0,
  status: "idle",
}

export const counterSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading"
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.status = "idle"
      state.value += action.payload
    },
    incrementAsync: (state, action: PayloadAction<number>) => {
      state.status = "idle"
      state.value += action.payload
    },
  },
})

export const { loading, increment, decrement, incrementByAmount, incrementAsync } = counterSlice.actions

export const currentState = (state: RootState) => state.counter

export default counterSlice.reducer
