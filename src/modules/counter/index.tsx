import React, { useContext } from "react"
import { useSelector } from "react-redux"
import { configState } from "../../app/config"
import { Counter } from "./Counter"
import { counterActions } from "./state/actions"
import { ICounterActions } from "./state/actions"

const Countercontext = React.createContext<any>({})

export const useCounter = () => useContext<ICounterActions>(Countercontext)
export function CounterProvider({ children }: any) {
  const config = useSelector(configState)
  const actions = counterActions(config)

  return <Countercontext.Provider value={actions}>{children}</Countercontext.Provider>
}

export default function CounterInit() {
  return (
    <CounterProvider>
      <Counter></Counter>
    </CounterProvider>
  )
}
