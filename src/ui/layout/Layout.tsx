import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({
  children,
  headerTop,
  currency,
  loggedIn,
  cartItems,
  wishItems,
  compareItems,
}: any) => {
  return (
    <Fragment>
      <Header
        top={headerTop}
        currency={currency}
        loggedIn={loggedIn}
        cartItems={cartItems}
        wishItems={wishItems}
        compareItems={compareItems}
      />
      {children}
      <Footer backgroundColorClass="bg-gray" spaceTopClass="pt-100" spaceBottomClass="pb-70" />
    </Fragment>
  )
}

export default Layout
