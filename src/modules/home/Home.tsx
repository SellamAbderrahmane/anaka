import React, { Fragment, useEffect } from "react"
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

    return () => {}
  }, [])

  function subscribe(email: string) {
    dispatch(action.subscribe(email))
  }

  return (
    <Fragment>
      <HeroSliderOne loading={state.status === "loading"} heroSliderData={state.heroProducts} />
      <FeatureIcon />
      <TabProduct
        spaceBottomClass='pb-60'
        products={state.dailyProducts}
        loading={state.status === "dailyLoading"}
      />
      <Subscribe onSubscribe={subscribe} />
    </Fragment>
  )
}

export default Home
