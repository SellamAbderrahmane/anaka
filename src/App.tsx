import React, { useEffect } from "react"
import { configState, loadConfig } from "./app/config"

import AuthRoutes from "./modules"
import Spinner from "./ui/components/spinner/Spinner"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { ToastProvider } from "react-toast-notifications"

const App = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(configState)

  useEffect(() => {
    dispatch(loadConfig())
  }, [])

  return (
    <Spinner spinning={state.status === "loading"}>
      <ToastProvider placement="bottom-left">
        <AuthRoutes />
      </ToastProvider>
    </Spinner>
  )
}

export default App
