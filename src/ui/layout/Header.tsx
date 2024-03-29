import React, { useEffect, useState } from "react"
import HeaderTop from "./components/HeaderTop"
import IconGroup from "./components/IconGroup"
import Logo from "./components/Logo"
import MobileMenu from "./components/MobileMenu"
import NavMenu from "./components/NavMenu"

const Header = ({ top, currency, user, cartItems, wishItems, compareItems, storeinfo }: any) => {
  const [scroll, setScroll] = useState(0)
  const [headerTop, setHeaderTop] = useState(0)

  useEffect(() => {
    const header: any = document.querySelector(".sticky-bar")
    setHeaderTop(header.offsetTop)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <header className='header-area clearfix'>
      <div className='d-none d-lg-block header-top-area'>
        <div className='container'>
          <HeaderTop currency={currency} />
        </div>
      </div>

      <div
        className={`sticky-bar header-res-padding clearfix ${scroll > headerTop ? "stick" : ""}`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-xl-2 col-lg-2 col-md-6 col-4'>
              <Logo imageUrl='/assets/img/logo/logo.png' logoClass='logo' />
            </div>
            <div className='col-xl-8 col-lg-8 d-none d-lg-block'>
              <NavMenu strings={{}} />
            </div>
            <div className='col-xl-2 col-lg-2 col-md-6 col-8'>
              <IconGroup
                user={user}
                currency={currency}
                cartItems={cartItems}
                wishItems={wishItems}
                compareItems={compareItems}
              />
            </div>
          </div>
        </div>
        <MobileMenu storeinfo={storeinfo}/>
      </div>
    </header>
  )
}

export default Header
