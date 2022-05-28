import React, { Fragment, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { Nav, Tab } from "react-bootstrap"

import { useAuth } from "."
import SignIn from "./components/SignIn"
import RegisterIn from "./components/Register"
import Breadcrumb from "../../ui/components/Breadcrumb"

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
    <Fragment>
      <Breadcrumb />
      <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row row justify-content-center">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="signin" activeKey={props.page}>
                  <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link eventKey="signin">
                        <h4>Login</h4>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">
                        <h4>Register</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="signin">
                      <SignIn />
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <RegisterIn />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
