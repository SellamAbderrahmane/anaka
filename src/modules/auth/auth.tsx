import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"

import SignIn from "./components/SignIn"
import { useAuth } from "."

export default function Authentication(props: any) {
  const dispatch = useDispatch()
  const auth = useAuth()

  useEffect(() => {
    dispatch(auth.isAuthenticated())
  }, [auth, dispatch])

  if (props.loading) {
    return <div>Loading</div>
  }

  if (props.loggedIn) {
    return <Navigate to="/" />
  }

  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="login">
          <SignIn loading={props.loading} />
        </div>
        <div className="register">{/* <SignIn /> */}</div>
      </div>
    </div>
  )
}