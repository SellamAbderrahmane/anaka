import React, { Fragment, useEffect, useRef, useState } from "react"
import Swiper from "react-id-swiper"

export const ProductImageGallery = ({ product, onImageClick }: any) => {
  const lightGalleryRef = useRef(null);
  const [gallerySwiper, getGallerySwiper] = useState(null)
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null)

  // effect for swiper slider synchronize
  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper
      thumbnailSwiper.controller.control = gallerySwiper
    }
  }, [gallerySwiper, thumbnailSwiper])

  // swiper slider settings
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    // effect: "fade"
  }

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className='swiper-button-prev ht-swiper-button-nav'>
        <i className='pe-7s-angle-left' />
      </button>
    ),
    renderNextButton: () => (
      <button className='swiper-button-next ht-swiper-button-nav'>
        <i className='pe-7s-angle-right' />
      </button>
    ),
  }
  return (
    <Fragment>
      <div className='product-large-image-wrapper'>
        {(product.discount || product.new) && (
          <div className='product-img-badges'>
            {product.discount && <span className='pink'>-{product.discount}%</span>}
            {product.new && <span className='purple'>New</span>}
          </div>
        )}

        <div ref={lightGalleryRef}>
          <Swiper {...gallerySwiperParams}>
            {product.image?.map((single, key) => {
              return (
                <div key={key}>
                  {/* <div className='lightgallery_btn_wrap'>
                    <button onClick={openGallery}>
                      <i className='pe-7s-expand1'></i>
                    </button>
                  </div> */}
                  <div className='single-image'>
                    <img src={process.env.PUBLIC_URL + single} className='img-fluid' alt='' />
                  </div>
                </div>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className='product-small-image-wrapper mt-15 nav-style-1'>
        <Swiper {...thumbnailSwiperParams}>
          {product.image &&
            product.image.map((single, key) => {
              return (
                <div className='single-image' key={key}>
                  <img src={process.env.PUBLIC_URL + single} className='img-fluid' alt='' />
                </div>
              )
            })}
        </Swiper>
      </div>
    </Fragment>
  )
}

export default ProductImageGallery
