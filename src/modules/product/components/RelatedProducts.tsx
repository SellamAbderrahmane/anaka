import React from "react"
import Swiper from "react-id-swiper"
import ProductCart from "../../../ui/components/product/ProductCart"

import { configState } from "../../../app/config"
import { currentCartState } from "../../cart/state"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import SectionTitle from "../../../ui/components/SectionTitle"
import { isProductExist } from "../../../utils"
import { useCart } from "../../contexts"

export const RelatedProducts = ({ relatedProducts }: any) => {
  const cart = useCart()
  const dispatch = useAppDispatch()
  const confState = useAppSelector(configState)
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

  const settings = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  }

  if (relatedProducts?.length === 0) {
    return
  }

  return (
    <div className='related-product-area pb-95'>
      <div className='container'>
        <SectionTitle titleText='Related Products' positionClass='text-center' spaceClass='mb-50' />
        <div className='row'>
          <Swiper {...settings}>
            {relatedProducts.map((product: any) => {
              return (
                <ProductCart
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  addToCompare={addToCompare}
                  currency={confState.currency}
                  addToWishlist={addToWishlist}
                  sliderClassName='swiper-slide'
                  cartItem={isProductExist(product.id, cartState.cartItems)}
                  compareItem={isProductExist(product.id, cartState.compareItems)}
                  wishlistItem={isProductExist(product.id, cartState.wishItems)}
                />
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
