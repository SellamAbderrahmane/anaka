import React, { useContext } from "react"
import { useSelector } from "react-redux"

import { AuthRepository } from "../../data"
import { configState } from "../../app/config"
import { authActions, AuthActionsCreators } from "./state"

// import "./auth.scss"
// import Authentication from "./auth"

// const mapStateToProps = ({ auth }: AppState) => {
//   return {
//     loading: auth.loading,
//     loggedIn: auth.loggedIn,
//   }
// }

// const mapDispatchToProps = {}

// export * from "./state"
// export default connect(mapStateToProps, mapDispatchToProps)(Authentication)

const Authcontext = React.createContext<any>({})

export const useAuth = () => useContext<AuthActionsCreators>(Authcontext)
export function AuthProvider({ children }: any) {
  const config = useSelector(configState)
  const auth = authActions(new AuthRepository(config.http))

  return <Authcontext.Provider value={auth}>{children}</Authcontext.Provider>
}

export default function CounterInit() {
  return <AuthProvider></AuthProvider>
}
