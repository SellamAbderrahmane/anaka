import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import ProductModal from "./ProductModel"
import ProductRating from "./ProductRating"

export const ProductGrid = ({
  products,
  currency = {
    currencyRate: 1,
    currencySymbol: "$",
  },
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems = [],
  wishlistItems = [],
  compareItems = [],
  sliderClassName,
  spaceBottomClass,
}: any) => {
  return (
    <Fragment>
      {products.map((product) => {
        return (
          <ProductGridSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            currency={currency}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            addToCompare={addToCompare}
            cartItem={cartItems.filter((cartItem) => cartItem.id === product.id)[0]}
            wishlistItem={wishlistItems.filter((wishlistItem) => wishlistItem.id === product.id)[0]}
            compareItem={compareItems.filter((compareItem) => compareItem.id === product.id)[0]}
            key={product.id}
          />
        )
      })}
    </Fragment>
  )
}

export const ProductGridSingle = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName = "",
  spaceBottomClass = "",
}: any) => {
  const [modalShow, setModalShow] = useState(false)
  // const { addToast } = useToasts()

  const discountedPrice = 0
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2)
  const finalDiscountedPrice = +(discountedPrice * currency.currencyRate).toFixed(2)

  return (
    <Fragment>
      <div className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${sliderClassName}`}>
        <div className={`product-wrap ${spaceBottomClass}`}>
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img className="default-img" src={process.env.PUBLIC_URL + product.image[0]} alt="" />
              {product.image.length > 1 && (
                <img className="hover-img" src={process.env.PUBLIC_URL + product.image[1]} alt="" />
              )}
            </Link>
            {(product.discount || product.new) && (
              <div className="product-img-badges">
                {product.discount ? <span className="pink">-{product.discount}%</span> : ""}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            )}

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist"}
                >
                  <i className="pe-7s-like" />
                </button>
              </div>
              <div className="pro-same-action pro-cart">
                {product.affiliateLink ? (
                  <a href={product.affiliateLink} rel="noopener noreferrer" target="_blank">
                    Buy now
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>Select Option</Link>
                ) : product.stock && product.stock > 0 ? (
                  <button
                    className={cartItem !== undefined && cartItem.quantity > 0 ? "active" : ""}
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={cartItem !== undefined ? "Added to cart" : "Add to cart"}
                  >
                    <i className="pe-7s-cart"></i>
                    {cartItem !== undefined && cartItem.quantity > 0 ? "Added" : "Add to cart"}
                  </button>
                ) : (
                  <button disabled className="active">
                    Out of Stock
                  </button>
                )}
              </div>
              <div className="pro-same-action pro-quickview">
                <button onClick={() => setModalShow(true)} title="Quick View">
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>{product.name}</Link>
            </h3>
            {product.rating && product.rating > 0 && (
              <div className="product-rating">
                <ProductRating ratingValue={product.rating} />
              </div>
            )}
            <div className="product-price">
              {discountedPrice !== null ? (
                <Fragment>
                  <span>{currency.currencySymbol + finalDiscountedPrice}</span>
                  <span className="old">{currency.currencySymbol + finalProductPrice}</span>
                </Fragment>
              ) : (
                <span>{currency.currencySymbol + finalProductPrice} </span>
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
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
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

export default ProductGrid
