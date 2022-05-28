import React from "react"
import { NavLink } from "react-router-dom"
// import { Breadcrumbs } from "react-breadcrumbs-dynamic";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
      <div className="container">
        <div className="breadcrumb-content text-center">
          <span>
            <span>
              <NavLink to="/home">Home</NavLink>
              <span>/</span>
            </span>
            <span><NavLink to="/shop">Shop</NavLink></span>
          </span>
          {/* <Breadcrumbs
            separator={<span>/</span>}
            item={NavLink}
            finalItem={"span"}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
