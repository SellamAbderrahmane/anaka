import React from "react"
import { Link } from "react-router-dom"

const NavMenu = ({ menuWhiteClass, sidebarMenu }: any) => {
  return (
    <div
      className={`${
        sidebarMenu ? "sidebar-menu" : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              home <i className="fa fa-angle-down" />
            </Link>
            <ul className="mega-menu mega-menu-padding">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>home_group_one</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion"}>home_fashion</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>home_group_two</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture-five"}>
                      home_furniture_five
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>home_group_three</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-grid-banner"}>home_grid_banner</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/shop">
              shop <i className="fa fa-angle-down" />
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>shop_layout</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      shop_grid_standard
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>product_details</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>product_tab_bottom</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/banner/banner-12.png"}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>collection</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>contact_us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMenu
