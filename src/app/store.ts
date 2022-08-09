import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import configReducer from "./config"
import { authReducer } from "../modules/auth/state"
import { ShopReducer } from "../modules/shop/state"
import { homeReducer } from "../modules/home/state"
import { contactReducer } from "../modules/contact/state"
import { cartReducer } from "../modules/cart/state"
import { productReducer } from "../modules/product/state"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    shop: ShopReducer,
    config: configReducer,
    contact: contactReducer,
    cart: cartReducer,
    product: productReducer,
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
