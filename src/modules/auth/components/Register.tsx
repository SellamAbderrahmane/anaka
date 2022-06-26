import React from "react"
import { useDispatch } from "react-redux"
import { useUserAction } from "../../contexts"
import { email, FormGroup, required, useForm } from "../../../ui/components/form"

export const RegisterIn = () => {
  const dispatch = useDispatch()
  const auth = useUserAction()

  const formgroup: FormGroup = {
    email: {
      name: "email",
      placeholder: "Email",
      validators: [required("Email required"), email("Email format invalid")],
    },
    firstname: {
      span: 6,
      name: "firstname",
      placeholder: "First name",
      validators: [required("First name required")],
    },
    lastname: {
      span: 6,
      name: "lastname",
      placeholder: "Last name",
      validators: [required("Last name required")],
    },
    password: {
      name: "password",
      placeholder: "Password",
      validators: [required("Password required")],
    },
  }

  const { getvalue, renderForm, isValid } = useForm(formgroup)

  const signUp = () => {
    if (!isValid()) return

    dispatch(auth.signUp(getvalue()))
  }

  const actions = () => {
    return (
      <div className="button-box">
        <button onClick={signUp} disabled={!isValid()}>
          <span>Register</span>
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

export default RegisterIn
