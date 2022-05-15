import React, { useContext } from "react"
import { useSelector } from "react-redux"
import { configState } from "../../app/config"
import Home from "./Home"
import { counterActions } from "./state/actions"
import { IHomeActions } from "./state/actions"

const Countercontext = React.createContext<any>({})

export const useHome = () => useContext<IHomeActions>(Countercontext)
export function HomeProvider({ children }: any) {
  const config = useSelector(configState)
  const actions = counterActions(config)

  return <Countercontext.Provider value={actions}>{children}</Countercontext.Provider>
}

export default function CounterInit() {
  return (
    <HomeProvider>
      <Home></Home>
    </HomeProvider>
  )
}
