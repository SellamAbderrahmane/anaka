import React, { useEffect } from "react"
import { configState, loadConfig } from "./app/config"

import AuthRoutes from "./modules"
import Spinner from "./ui/components/spinner/Spinner"
import { useAppDispatch, useAppSelector } from "./app/hooks"

const App = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(configState)

  useEffect(() => {
    dispatch(loadConfig())
  }, [])

  return (
    <Spinner spinning={state.status === "loading"}>
      <AuthRoutes />
    </Spinner>
  )
}

export default App
