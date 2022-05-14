import React, { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { AppState } from "../../store"
import { useAuth } from "../../modules"
import { Navigate } from "react-router-dom"

function PrivateRoute({ element: Element, redirectTo = "/auth", roles, ...rest }: any) {
  const dispatch = useDispatch()
  const auth = useAuth()

  useEffect(() => {
    dispatch(auth.isAuthenticated())
  }, [auth, dispatch])

  if (rest.loading) {
    return <div>Loading...</div>
  }

  if (rest.loggedIn) {
    return <Element {...rest} />
  }

  return <Navigate to={"/auth"} />
}

const mapStateToProps = ({ auth }: AppState) => {
  return {
    loggedIn: auth.loggedIn,
    loading: auth.loading,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
