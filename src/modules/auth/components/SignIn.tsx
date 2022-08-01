import React from "react"
import { useDispatch } from "react-redux"

import { useUserAction } from "../../contexts"
import { email, FormGroup, required, useForm } from "../../../ui/components/form"

export const SignIn = () => {
  const dispatch = useDispatch()
  const auth = useUserAction()

  const formgroup: FormGroup = {
    email: {
      name: "email",
      placeholder: "Email",
      validators: [required("Email required"), email('Email format invalid')],
    },
    password: {
      name: "password",
      placeholder: "Password",
      validators: [required("Password required")],
    },
    rememberme: {
      type: "checkbox",
      name: "rememberme",
      className: "pb-3",
      label: "Remember me",
    },
  }

  const { getvalue, renderForm, isValid } = useForm(formgroup)

  const login = () => {
    if (!isValid()) return

    dispatch(auth.login(getvalue()))
  }

  const actions = () => {
    return (
      <div className="button-box">
        <button onClick={login} >
          <span>Login</span>
        </button>
      </div>
    )
  }

  return (
    <div className="login-form-container">
      <div className="login-register-form">{renderForm(actions)}</div>
    </div>
  )
}

export default SignIn
