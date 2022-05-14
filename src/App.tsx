import React, { useEffect } from "react"
import { configState, loadConfig } from "./app/config"

import { useAppDispatch, useAppSelector } from "./app/hooks"
import Counter from "./modules/counter"

const App = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(configState)

  useEffect(() => {
    dispatch(loadConfig())
  }, [dispatch])

  if (state.status === "loading") {
    return <div>laoding</div>
  }

  return <Counter />
}

export default App
