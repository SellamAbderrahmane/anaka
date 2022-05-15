import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import configReducer from "./config"
import { authReducer } from "../modules/auth/state"
import counterReducer from "../modules/counter/state/state"

export const store = configureStore({
  reducer: {
    auth: authReducer,
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
