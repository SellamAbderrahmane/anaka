import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import ProductModal from "./ProductModel"
import ProductRating from "./ProductRating"

export const ProductGrid = ({
  products = [
    {
      id: "1",
      sku: "asdf123",
      name: "Lorem ipsum jacket",
      price: 12.45,
      discount: 10,
      offerEnd: "October 5, 2020 12:11:00",
      new: false,
      rating: 4,
      saleCount: 54,
      category: ["fashion", "men"],
      tag: ["fashion", "men", "jacket", "full sleeve"],
      variation: [
        {
          color: "white",
          image: "/assets/img/product/fashion/1.jpg",
          size: [
            {
              name: "x",
              stock: 3,
            },
            {
              name: "m",
              stock: 2,
            },
            {
              name: "xl",
              stock: 5,
            },
          ],
        },
        {
          color: "black",
          image: "/assets/img/product/fashion/8.jpg",
          size: [
            {
              name: "x",
              stock: 4,
            },
            {
              name: "m",
              stock: 7,
            },
            {
              name: "xl",
              stock: 9,
            },
            {
              name: "xxl",
              stock: 1,
            },
          ],
        },
        {
          color: "brown",
          image: "/assets/img/product/fashion/3.jpg",
          size: [
            {
              name: "x",
              stock: 1,
            },
            {
              name: "m",
              stock: 2,
            },
            {
              name: "xl",
              stock: 4,
            },
            {
              name: "xxl",
              stock: 0,
            },
          ],
        },
      ],
      image: [
        "/assets/img/product/fashion/1.jpg",
        "/assets/img/product/fashion/3.jpg",
        "/assets/img/product/fashion/6.jpg",
        "/assets/img/product/fashion/8.jpg",
        "/assets/img/product/fashion/9.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    },
  ],
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
              {product.image.length > 1 ? (
                <img className="hover-img" src={process.env.PUBLIC_URL + product.image[1]} alt="" />
              ) : (
                ""
              )}
            </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? <span className="pink">-{product.discount}%</span> : ""}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
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
                    {" "}
                    Buy now{" "}
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>Select Option</Link>
                ) : product.stock && product.stock > 0 ? (
                  <button
                    className={cartItem !== undefined && cartItem.quantity > 0 ? "active" : ""}
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={cartItem !== undefined ? "Added to cart" : "Add to cart"}
                  >
                    {" "}
                    <i className="pe-7s-cart"></i>{" "}
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
                  <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
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
