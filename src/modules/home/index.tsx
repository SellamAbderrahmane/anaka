import React from "react"
import { useSelector } from "react-redux"

import Home from "./Home"
import { Homecontext } from "../contexts"
import { homeActions } from "./state/actions"
import { ProductRepository, UserRepository } from "../../data"
import { configState } from "../../app/config"

export function HomeProvider({ children }: any) {
  const config = useSelector(configState)
  const actions = homeActions(new ProductRepository(config.http), new UserRepository(config.http))

  return <Homecontext.Provider value={actions}>{children}</Homecontext.Provider>
}

export default function HomeInit() {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  )
}
