import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { getDiscountPrice, getProductPrice } from "../../../utils"
import ProductModal from "./ProductModel"
import ProductRating from "./ProductRating"

export const ProductCart = ({
  product,
  currency,
  cartItem,
  addToCart,
  compareItem,
  addToCompare,
  wishlistItem,
  addToWishlist,
  sliderClassName,
  spaceBottomClass,
}) => {
  const [modalShow, setModalShow] = useState(false)

  const productPrice = getProductPrice(product.price, null, currency)
  const finalDiscountedPrice = getDiscountPrice(productPrice, product.discount, currency)

  const ProductActions = () => {
    return (
      <div className='product-action'>
        <div className='pro-same-action pro-wishlist'>
          <button
            className={wishlistItem ? "active" : ""}
            onClick={() => addToWishlist(product)}
            title={wishlistItem ? "Added to wishlist" : "Add to wishlist"}
          >
            <i className='pe-7s-like' />
          </button>
        </div>
        <div className='pro-same-action pro-cart'>
          {product.affiliateLink ? (
            <a href={product.affiliateLink} rel='noopener noreferrer' target='_blank'>
              Buy now
            </a>
          ) : product.variant_groups && product.variant_groups.length >= 1 ? (
            <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>Select Option</Link>
          ) : product.stock && product.stock > 0 ? (
            <button
              disabled={cartItem}
              onClick={() => addToCart(product)}
              className={cartItem ? "active" : ""}
              title={cartItem ? "Added to cart" : "Add to cart"}
            >
              <i className='pe-7s-cart'></i> {cartItem ? "Added" : "Add to cart"}
            </button>
          ) : (
            <button disabled className='active'>
              Out of Stock
            </button>
          )}
        </div>
        <div className='pro-same-action pro-quickview'>
          <button onClick={() => setModalShow(true)} title='Quick View'>
            <i className='pe-7s-look' />
          </button>
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <div className={`col-xl-4 col-sm-4 ${sliderClassName ? sliderClassName : ""}`}>
        <div className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}>
          <div className='product-img'>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img className='default-img' src={process.env.PUBLIC_URL + product.image[0]} alt='' />
              {product.image.length > 1 && (
                <img className='hover-img' src={process.env.PUBLIC_URL + product.image[1]} alt='' />
              )}
            </Link>

            {(product.discount || product.new) && (
              <div className='product-img-badges'>
                {product.discount ? <span className='pink'>-{product.discount}%</span> : ""}
                {product.new ? <span className='purple'>New</span> : ""}
              </div>
            )}

            <ProductActions />
          </div>
          <div className='product-content text-center'>
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>{product.name}</Link>
            </h3>
            {product.rating && product.rating > 0 && (
              <div className='product-rating'>
                <ProductRating ratingValue={product.rating} />
              </div>
            )}

            <div className='product-price'>
              {finalDiscountedPrice ? (
                <Fragment>
                  <span>{currency.currencySymbol + finalDiscountedPrice}</span>
                  <span className='old'>{currency.currencySymbol + productPrice}</span>
                </Fragment>
              ) : (
                <span>{currency.currencySymbol + productPrice} </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={finalDiscountedPrice}
        finalproductprice={productPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={() => {}}
      />
    </Fragment>
  )
}

export default ProductCart
