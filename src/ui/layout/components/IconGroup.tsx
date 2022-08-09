import React from "react"
import { Link } from "react-router-dom"
import MenuCart from "../../../modules/cart/components/MenuCart"

const IconGroup = ({ currency, user, cartItems, wishItems, compareItems }: any) => {
  // useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     console.log(e.target)
  //     // if (concernedElement.contains(e.target)) {
  //     //   console.log("clicked inside");
  //     // } else {
  //     //   console.log("clicked outside");
  //     // }
  //   })

  //   return () => {
  //     console.log("lllddd")
  //     document.removeEventListener("mousedown", (e) => {})
  //   }
  // }, [])

  const handleClick = (e: any) => {
    e.currentTarget.nextSibling.classList.toggle("active")
  }

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu")
    offcanvasMobileMenu.classList.add("active")
  }

  return (
    <div className={`header-right-wrap`}>
      <div className='same-style header-search d-none d-lg-block'>
        <button className='search-active' onClick={(e) => handleClick(e)}>
          <i className='pe-7s-search' />
        </button>
        <div className='search-content'>
          <form action='#'>
            <input type='text' placeholder='Search' />
            <button className='button-search'>
              <i className='pe-7s-search' />
            </button>
          </form>
        </div>
      </div>
      <div className='same-style account-setting d-none d-lg-block'>
        <button className='account-setting-active' onClick={(e) => handleClick(e)}>
          <i className='pe-7s-user-female' />
        </button>
        <div className='account-dropdown'>
          <ul>
            {!user ? (
              <>
                <li>
                  <Link to='/auth/signin'>Login</Link>
                </li>
                <li>
                  <Link to='/auth/register'>Register</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to='/account'>my account</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='same-style header-compare'>
        <Link to={"/compare"}>
          <i className='pe-7s-shuffle' />
          <span className='count-style'>{compareItems}</span>
        </Link>
      </div>

      <div className='same-style header-wishlist'>
        <Link to={"/wishlist"}>
          <i className='pe-7s-like' />
          <span className='count-style'>{wishItems}</span>
        </Link>
      </div>

      <div className='same-style cart-wrap d-none d-lg-block'>
        <button className='icon-cart' onClick={(e) => handleClick(e)}>
          <i className='pe-7s-shopbag' />
          <span className='count-style'>{cartItems}</span>
        </button>
        <MenuCart currency={currency} />
      </div>

      <div className='same-style cart-wrap d-block d-lg-none'>
        <Link className='icon-cart' to={"/cart"}>
          <i className='pe-7s-shopbag' />
          <span className='count-style'>{cartItems}</span>
        </Link>
      </div>

      <div className='same-style mobile-off-canvas d-block d-lg-none'>
        <button className='mobile-aside-button' onClick={() => triggerMobileMenu()}>
          <i className='pe-7s-menu' />
        </button>
      </div>
    </div>
  )
}

export default IconGroup
