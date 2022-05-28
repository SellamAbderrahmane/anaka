import React from "react"
import { Link } from "react-router-dom"
import { configState } from "../../../app/config"
import { useAppSelector } from "../../../app/hooks"
import MenuCart from "../../components/MenuCart"

const IconGroup = ({ currency, deleteFromCart }: any) => {
  const appState = useAppSelector(configState)

  const handleClick = (e: any) => {
    e.currentTarget.nextSibling.classList.toggle("active")
  }

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu")
    offcanvasMobileMenu.classList.add("active")
  }

  return (
    <div className={`header-right-wrap`}>
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        <button className="account-setting-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            <li>
              <Link to="/auth/signin">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
            <li>
              <Link to="/account">my account</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-style header-compare">
        <Link to={"/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">{appState.cartItems}</span>
        </Link>
      </div>

      <div className="same-style header-wishlist">
        <Link to={"/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">{appState.wishItems}</span>
        </Link>
      </div>

      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">{appState.cartItems}</span>
        </button>
        <MenuCart cartData={[]} currency={currency} deleteFromCart={deleteFromCart} />
      </div>

      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={"/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">{appState.cartItems}</span>
        </Link>
      </div>

      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button className="mobile-aside-button" onClick={() => triggerMobileMenu()}>
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  )
}

export default IconGroup
