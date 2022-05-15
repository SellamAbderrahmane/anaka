import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, headerTop }: any) => {
  return (
    <Fragment>
      <Header top={headerTop} />
      {children}
      <Footer backgroundColorClass="bg-gray" spaceTopClass="pt-100" spaceBottomClass="pb-70" />
    </Fragment>
  )
}

export default Layout
