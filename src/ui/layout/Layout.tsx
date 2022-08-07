import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({
  children,
  headerTop,
  currency,
  user,
  cartItems,
  wishItems,
  compareItems,
  storeinfo,
}: any) => {
  return (
    <Fragment>
      <Header
        user={user}
        top={headerTop}
        currency={currency}
        cartItems={cartItems}
        wishItems={wishItems}
        compareItems={compareItems}
        storeinfo={storeinfo}
      />
      {children}
      <Footer backgroundColorClass='bg-gray' spaceTopClass='pt-100' spaceBottomClass='pb-70' />
    </Fragment>
  )
}

export default Layout
