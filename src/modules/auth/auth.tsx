import React, { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { Nav, Tab } from "react-bootstrap"

import { useUserAction } from "../contexts"
import SignIn from "./components/SignIn"
import RegisterIn from "./components/Register"
import Breadcrumb from "../../ui/components/Breadcrumb"
import { useAppSelector } from "../../app/hooks"
import { currentAuthState } from "./state"
import Spinner from "../../ui/components/spinner/Spinner"

export default function Authentication(props: any) {
  const auth = useUserAction()
  const dispatch = useDispatch()
  const [page, setPage] = useState(props.page)
  const state = useAppSelector(currentAuthState)

  useEffect(() => {
    setPage(props.page)
    dispatch(auth.isAuthenticated())
  }, [])

  if (state.loggedIn) {
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
                <Spinner spinning={state.status === "loading"}>
                  <Tab.Container defaultActiveKey="signin" activeKey={page}>
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="signin" onClick={() => setPage("signin")}>
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register" onClick={() => setPage("register")}>
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="signin">
                        {props.loading}
                        <SignIn />
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <RegisterIn />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Spinner>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
