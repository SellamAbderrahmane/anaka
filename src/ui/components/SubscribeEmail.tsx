import React from "react"
import { email, required, useForm } from "./form"

const Subscribe = (props: any) => {
  return (
    <div className="subscribe-area-3 pt-100 pb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-10 mx-auto">
            <div className="subscribe-style-3 text-center">
              <h2>Subscribe </h2>
              <p>Subscribe to our newsletter to receive news on update</p>
              <SubscribeEmailForm onsubmit={props.onSubscribe} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SubscribeEmailForm = ({ onsubmit }: any) => {
  const { renderForm, isValid, getvalue } = useForm({
    email: {
      value: "",
      type: "email",
      name: "email",
      validators: [required("Email required"), email("Mail format invalid")],
      render: (onchange, input, form, index) => {
        return (
          <input
            key={index}
            type={input.type}
            name={input.name}
            className="email"
            value={input.value}
            onChange={onchange}
            placeholder="Your Email Address"
          />
        )
      },
    },
  })

  const submit = () => {
    if (isValid()) {
      onsubmit(getvalue().email)
    }
  }

  return (
    <div className="subscribe-form-3">
      <div className="mc-form">
        <div>{renderForm()}</div>
        <div className="clear-3">
          <button className="button" onClick={submit}>
            <i className="fa fa-long-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
