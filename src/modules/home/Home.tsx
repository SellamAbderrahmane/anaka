import React, { useEffect } from "react"
import { configState } from "../../app/config"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import FeatureIcon from "../../ui/components/FeatureIcon"
import { TabProduct } from "../../ui/components/product"
import Subscribe from "../../ui/components/SubscribeEmail"
import { currentCartState } from "../cart/state"
import { useCart, useHome } from "../contexts"
import HeroSliderOne from "./components/HeroSlider"
import { currentHomeState } from "./state/state"

const Home = () => {
  const action = useHome()
  const cart = useCart()
  const dispatch = useAppDispatch()
  const state = useAppSelector(currentHomeState)
  const config = useAppSelector(configState)
  const cartState = useAppSelector(currentCartState)

  useEffect(() => {
    dispatch(action.getHerosProducts())
    dispatch(action.getDailyProducts())
  }, [])

  function subscribe(email: string) {
    console.log(email)

    dispatch(action.subscribe(email))
  }

  const addToWishlist = (product: any) => {
    dispatch(cart.addToWishList(product))
  }

  const addToCart = (product: any) => {
    dispatch(cart.addToCart(product, 1, null, product.price))
  }

  return (
    <div>
      <HeroSliderOne loading={state.status === "loading"} heroSliderData={state.heroProducts} />
      <FeatureIcon />
      <TabProduct
        spaceBottomClass='pb-60'
        addToCart={addToCart}
        currency={config.currency}
        addToWishlist={addToWishlist}
        products={state.dailyProducts}
        cartItems={cartState.cartItems}
        wishlistItems={cartState.wishItems}
        compareItems={cartState.compareItems}
        loading={state.status === "dailyLoading"}
      />
      <Subscribe onSubscribe={subscribe} />
    </div>
  )
}

export default Home
