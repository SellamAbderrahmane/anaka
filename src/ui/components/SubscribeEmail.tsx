import React from "react"

const Subscribe = (props: any) => {
  return (
    <div className="subscribe-area-3 pt-100 pb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-10 mx-auto">
            <div className="subscribe-style-3 text-center">
              <h2>Subscribe </h2>
              <p>Subscribe to our newsletter to receive news on update</p>
              <SubscribeEmailForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SubscribeEmailForm = ({ status, message, onValidated }: any) => {
  let email: any
  const submit = () => {}

  return (
    <div className="subscribe-form-3">
      <div className="mc-form">
        <div>
          <input
            className="email"
            ref={(node) => (email = node)}
            type="email"
            placeholder="Your Email Address"
            required
          />
        </div>
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
