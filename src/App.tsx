import React, { useEffect } from "react"
import { configState, loadConfig } from "./app/config"

import { useAppDispatch, useAppSelector } from "./app/hooks"
import AuthRoutes from "./modules"

const App = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(configState)

  useEffect(() => {
    dispatch(loadConfig())
  }, [])

  if (state.status === "loading") {
    return <div>laoding</div>
  }

  return <AuthRoutes />
}

export default App
