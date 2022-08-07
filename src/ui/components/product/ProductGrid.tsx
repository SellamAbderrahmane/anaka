import React, { Fragment } from "react"
import { isProductExist } from "../../../utils"
import ProductCart from "./ProductCart"

export const ProductGrid = ({
  products,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClassName,
  spaceBottomClass,
}: any) => {
  return (
    <Fragment>
      {products.map((product: any) => {
        return (
          <ProductCart
            key={product.id}
            product={product}
            currency={currency}
            addToCart={addToCart}
            addToCompare={addToCompare}
            addToWishlist={addToWishlist}
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            cartItem={isProductExist(product.id, cartItems)}
            compareItem={isProductExist(product.id, compareItems)}
            wishlistItem={isProductExist(product.id, wishlistItems)}
          />
        )
      })}
    </Fragment>
  )
}

export default ProductGrid
