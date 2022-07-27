import React, { useEffect } from "react"
import { configState } from "../../app/config"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import FeatureIcon from "../../ui/components/FeatureIcon"
import { TabProduct } from "../../ui/components/product"
import Subscribe from "../../ui/components/SubscribeEmail"
import { useHome } from "../contexts"
import HeroSliderOne from "./components/HeroSlider"
import { currentHomeState } from "./state/state"

const Home = () => {
  const action = useHome()
  const dispatch = useAppDispatch()
  const state = useAppSelector(currentHomeState)
  const config = useAppSelector(configState)

  useEffect(() => {
    dispatch(action.getHerosProducts())
    dispatch(action.getDailyProducts())
  }, [])

  function subscribe(email: string) {
    console.log(email)

    dispatch(action.subscribe(email))
  }

  return (
    <div>
      <HeroSliderOne loading={state.status === "loading"} heroSliderData={state.heroProducts} />
      <FeatureIcon />
      <TabProduct
        category="fashion"
        spaceBottomClass="pb-60"
        currency={config.currency}
        products={state.dailyProducts}
        loading={state.status === "dailyLoading"}
      />
      <Subscribe onSubscribe={subscribe} />
    </div>
  )
}

export default Home
