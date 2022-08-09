import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { configState } from "../../app/config"
import { useAppSelector } from "../../app/hooks"
import { UserRepository } from "../../data"
import Breadcrumb from "../../ui/components/Breadcrumb"
import { email, required, useForm } from "../../ui/components/form"
import Spinner from "../../ui/components/spinner/Spinner"
import { Contactcontext, useContact } from "../contexts"
import { contactActions, contactState } from "./state"

export const Contact = ({ location }: any) => {
  const dispatch = useDispatch()

  const actions = useContact()
  const config = useAppSelector(configState)
  const currentState = useAppSelector(contactState)

  const { getvalue, renderForm, isValid } = useForm({
    name: {
      span: 6,
      name: "name",
      placeholder: "Name",
      validators: [required("Name required")],
    },
    email: {
      span: 6,
      name: "email",
      placeholder: "Email",
      validators: [required("Email required"), email("Email format invalid")],
    },
    subject: {
      name: "subject",
      placeholder: "Subject",
      validators: [required("Subject required")],
    },
    message: {
      type: "textarea",
      name: "message",
      placeholder: "Your message",
      validators: [required("Message required")],
    },
  })

  const onSubmit = () => {
    if (!isValid()) return
    dispatch(actions.subscribe(getvalue()))
  }

  const FormActions = () => (
    <button className="submit" type="submit" onClick={onSubmit}>
      SEND
    </button>
  )

  return (
    <Fragment>
      <Breadcrumb />

      <div className="contact-area pt-100 pb-100">
        <div className="container">
          {/* <div className="contact-map mb-10">
            <LocationMap latitude="47.444" longitude="-122.176" />
          </div> */}
          <div className="custom-row-2">
            <div className="col-lg-4 col-md-5">
              <div className="contact-info-wrap">
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="contact-info-dec">
                    <p>{config.storeinfo?.tel}</p>
                    <p>{config.storeinfo?.tel}</p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="contact-info-dec">
                    <p>
                      <a href="mailto:yourname@email.com">{config.storeinfo.email}</a>
                    </p>
                    <p>
                      <a href="https://yourwebsitename.com">{config.storeinfo.website}</a>
                    </p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="contact-info-dec">
                    <p>{config.storeinfo.address} </p>
                    <p>{config.storeinfo.street}</p>
                  </div>
                </div>
                <div className="contact-social text-center">
                  <h3>Follow Us</h3>
                  <ul>
                    <li>
                      <a href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="//pinterest.com">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="//thumblr.com">
                        <i className="fa fa-tumblr" />
                      </a>
                    </li>
                    <li>
                      <a href="//vimeo.com">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <Spinner spinning={currentState.status === "loading"}>
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  {renderForm(FormActions, {
                    className: "contact-form-style",
                  })}
                </div>
              </Spinner>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default (props: any) => {
  function ContactProvider({ children }: any) {
    const config = useSelector(configState)
    const actions = contactActions(new UserRepository(config.http))

    return <Contactcontext.Provider value={actions}>{children}</Contactcontext.Provider>
  }

  return (
    <ContactProvider>
      <Contact />
    </ContactProvider>
  )
}
