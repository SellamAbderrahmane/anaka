import { useSelector } from "react-redux"
import { configState } from "../../app/config"
import { Cartcontext } from "../contexts"
import { cartActions } from "./state"

import { CartRepository, ProductRepository, UserRepository } from "../../data"

export * from "./Cart"
export * from "./others/Wishlist"
export * from "./others/Compare"

export function CartProvider({ children }: any) {
  const config = useSelector(configState)
  const actions = cartActions(
    new ProductRepository(config.http),
    new UserRepository(config.http),
    new CartRepository(config.http)
  )

  return <Cartcontext.Provider value={actions}>{children}</Cartcontext.Provider>
}
