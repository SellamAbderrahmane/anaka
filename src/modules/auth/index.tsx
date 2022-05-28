import React, { useContext } from "react"
import { useSelector } from "react-redux"

import Authentication from "./auth"
import Layout from "../../ui/layout/Layout"
import { AuthRepository } from "../../data"
import { configState } from "../../app/config"
import { authActions, AuthActionsCreators } from "./state"
import { useParams } from "react-router-dom"

const Authcontext = React.createContext<any>({})

export const useAuth = () => useContext<AuthActionsCreators>(Authcontext)
export function AuthProvider({ children }: any) {
  const config = useSelector(configState)
  const auth = authActions(new AuthRepository(config.http))

  return <Authcontext.Provider value={auth}>{children}</Authcontext.Provider>
}

export default function AuthInit() {
  const params = useParams();

  return (
    <Layout cartItems={[]} wishItems={[]}>
      <AuthProvider>
        <Authentication page={params.page}/>
      </AuthProvider>
    </Layout>
  )
}
