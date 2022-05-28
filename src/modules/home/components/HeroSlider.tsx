import React, { useRef } from "react"
import Swiper from "react-id-swiper"
import { Link } from "react-router-dom"

const HeroSliderOne = () => {
  const ref = useRef(null)

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev()
    }
  }

  const params: any = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav" onClick={goPrev}>
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav" onClick={goNext}>
        <i className="pe-7s-angle-right" />
      </button>
    ),
  }

  const heroSliderData = [
    {
      id: 1,
      title: "Smart Products",
      subtitle: "Winter Offer 2020 Collection",
      image: "/assets/img/slider/single-slide-hm1-2.png",
      url: "/shop-grid-standard",
    },
    {
      id: 2,
      title: "Smart Products",
      subtitle: "Summer Offer 2020 Collection",
      image: "/assets/img/slider/single-slide-1.png",
      url: "/shop-grid-standard",
    },
  ]

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params} ref={ref}>
          {heroSliderData.map((single, key) => {
            return <SingleSlider data={single} key={key} />
          })}
        </Swiper>
      </div>
    </div>
  )
}

const SingleSlider = ({ data }) => {
  return (
    <div className="single-slider slider-height-1 bg-purple swiper-slide">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <div className="slider-btn btn-hover">
                <Link className="animated" to={process.env.PUBLIC_URL + data.url}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-single-img slider-animated-1">
              <img
                className="animated img-fluid"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSliderOne
