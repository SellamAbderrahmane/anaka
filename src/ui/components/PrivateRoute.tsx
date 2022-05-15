import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"

import { useAuth } from "../../modules"
import { useAppSelector } from "../../app/hooks"
import { currentAuthState } from "../../modules/auth/state"

function PrivateRoute({ element: Element, redirectTo = "/auth", roles, ...rest }: any) {
  const auth = useAuth()
  const dispatch = useDispatch()
  const state = useAppSelector(currentAuthState)

  useEffect(() => {
    dispatch(auth.isAuthenticated())
  }, [])

  if (state.status === 'loading') {
    return <div>Loading...</div>
  }

  if (state.loggedIn) {
    return <Element {...rest} />
  }

  return <Navigate to={redirectTo} />
}

export default PrivateRoute
