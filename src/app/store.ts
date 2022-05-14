import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../modules/counter/state/state"
import configReducer from "./config"

export const store = configureStore({
  reducer: {
    config: configReducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
