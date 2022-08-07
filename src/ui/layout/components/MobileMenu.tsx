import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const MobileMenuSearch = () => {
  return (
    <div className='offcanvas-mobile-search-area'>
      <form action='#'>
        <input type='search' placeholder='Search ...' />
        <button type='submit'>
          <i className='fa fa-search' />
        </button>
      </form>
    </div>
  )
}

const MobileNavMenu = () => {
  return (
    <nav className='offcanvas-navigation' id='offcanvas-navigation'>
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>home</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>Collection</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact us</Link>
        </li>
      </ul>
    </nav>
  )
}

const MobileWidgets = ({ storeinfo }: any) => {
  return (
    <div className='offcanvas-widget-area'>
      <div className='off-canvas-contact-widget'>
        <div className='header-contact-info'>
          <ul className='header-contact-info__list'>
            <li>
              <i className='fa fa-phone'></i> <a href={`tel://${storeinfo.tel}`}>{storeinfo.tel}</a>
            </li>
            <li>
              <i className='fa fa-envelope'></i>
              <a href={`mailto:${storeinfo.email}`}>{storeinfo.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='off-canvas-widget-social'>
        <a href='//twitter.com' title='Twitter'>
          <i className='fa fa-twitter'></i>
        </a>
        <a href='//instagram.com' title='Instagram'>
          <i className='fa fa-instagram'></i>
        </a>
        <a href='//facebook.com' title='Facebook'>
          <i className='fa fa-facebook'></i>
        </a>
        <a href='//pinterest.com' title='Pinterest'>
          <i className='fa fa-pinterest'></i>
        </a>
      </div>
    </div>
  )
}

const MobileMenu = ({ imageUrl, logoClass, storeinfo }: any) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation")
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu")
    const anchorLinks = offCanvasNav.querySelectorAll("a")

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      )
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand")
    const numMenuExpand = menuExpand.length

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e)
      })
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu()
      })
    }
  })

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active")
  }

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu")
    offcanvasMobileMenu.classList.remove("active")
  }

  return (
    <div className='offcanvas-mobile-menu' id='offcanvas-mobile-menu'>
      <button
        className='offcanvas-menu-close'
        id='mobile-menu-close-trigger'
        onClick={() => closeMobileMenu()}
      >
        <i className='pe-7s-close'></i>
      </button>
      <div className='offcanvas-wrapper'>
        <div className='offcanvas-inner-content'>
          <MobileMenuSearch />
          <MobileNavMenu />
          {/* <MobileLangCurChange /> */}
          <MobileWidgets storeinfo={storeinfo} />
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
