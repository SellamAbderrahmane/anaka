import React, { Fragment } from "react"

import { useCart } from "../contexts"
import { isProductExist } from "../../utils"
import { configState } from "../../app/config"
import { currentCartState } from "../cart/state"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import ProductCart from "../../ui/components/product/ProductCart"

export const ProductsGrid = ({ products, sliderClassName }: any) => {
  const cart = useCart()
  const dispatch = useAppDispatch()
  const config = useAppSelector(configState)
  const cartState = useAppSelector(currentCartState)

  const addToWishlist = (product: any) => {
    dispatch(cart.addToWishList(product))
  }

  const addToCart = (product: any) => {
    dispatch(cart.addToCart(product, 1, null, product.price))
  }

  const addToCompare = (product: any) => {
    dispatch(cart.addToCompareList(product))
  }

  return (
    <Fragment>
      {products?.length > 0 && products.map((product: any) => {
        return (
          <ProductCart
            key={product.id}
            product={product}
            currency={config.currency}
            addToCart={addToCart}
            addToCompare={addToCompare}
            addToWishlist={addToWishlist}
            sliderClassName={sliderClassName}
            cartItem={isProductExist(product.id, cartState.cartItems)}
            compareItem={isProductExist(product.id, cartState.compareItems)}
            wishlistItem={isProductExist(product.id, cartState.wishItems)}
          />
        )
      })}
    </Fragment>
  )
}

export default ProductsGrid
