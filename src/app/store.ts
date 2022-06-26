import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import configReducer from "./config"
import { authReducer } from "../modules/auth/state"
import { ShopReducer } from "../modules/shop/state"
import { homeReducer } from "../modules/home/state"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    shop: ShopReducer,
    config: configReducer,
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
