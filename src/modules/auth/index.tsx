import React from "react"
import { useSelector } from "react-redux"

import Authentication from "./auth"
import Layout from "../../ui/layout/Layout"
import { UserRepository } from "../../data"
import { configState } from "../../app/config"
import { authActions } from "./state"
import { useParams } from "react-router-dom"
import { UserActionContext } from "../contexts"

export function AuthProvider({ children }: any) {
  const config = useSelector(configState)
  const auth = authActions(new UserRepository(config.http))

  return <UserActionContext.Provider value={auth}>{children}</UserActionContext.Provider>
}

export default function AuthInit() {
  const { page = "signin" } = useParams()

  return (
    <Layout cartItems={0} wishItems={0} loggedIn={false}>
      <AuthProvider>
        <Authentication page={page} />
      </AuthProvider>
    </Layout>
  )
}
