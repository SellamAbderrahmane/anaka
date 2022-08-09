import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"

import { useUserAction } from "../../modules/contexts"
import { useAppSelector } from "../../app/hooks"
import { currentAuthState } from "../../modules/auth/state"

function PrivateRoute({ element: Element, redirectTo = "/auth/signin", roles, ...rest }: any) {
  const auth = useUserAction()
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
