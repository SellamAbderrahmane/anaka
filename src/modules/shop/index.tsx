import React from "react"
import { useSelector } from "react-redux"

import ShopPage from "./Shop"
import { ProductRepository } from "../../data"
import { configState } from "../../app/config"
import { ShopActions } from "./state"
import { Shopcontext } from "../contexts"

export function ShopProvider({ children }: any) {
  const config = useSelector(configState)
  const auth = ShopActions(new ProductRepository(config.http))

  return <Shopcontext.Provider value={auth}>{children}</Shopcontext.Provider>
}

export default function ShopInit() {
  return (
    <ShopProvider>
      <ShopPage />
    </ShopProvider>
  )
}
