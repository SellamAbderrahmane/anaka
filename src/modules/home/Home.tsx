import React from "react"
import FeatureIcon from "../../ui/components/FeatureIcon"
import { TabProduct } from "../../ui/components/product"
import Subscribe from "../../ui/components/SubscribeEmail"
import HeroSliderOne from "./components/HeroSlider"

const Home = () => {
  return (
    <div>
      <HeroSliderOne />
      <FeatureIcon />
      <TabProduct spaceBottomClass="pb-60" category="fashion" />
      <Subscribe />
    </div>
  )
}

export default Home
