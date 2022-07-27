import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { configState } from "../../../app/config"
import { useAppSelector } from "../../../app/hooks"
import Breadcrumb from "../../../ui/components/Breadcrumb"
import { getDiscountPrice } from "../../../utils"

export const Wishlist = ({
  location,
  cartItems = [],
  addToCart,
  wishlistItems,
  deleteFromWishlist,
  deleteAllFromWishlist,
}: any) => {
  const config = useAppSelector(configState)

  wishlistItems = [
    {
      id: "4",
      sku: "asdf126",
      name: "Lorem ipsum fashion coat",
      price: 15.5,
      discount: 0,
      new: true,
      rating: 4,
      saleCount: 20,
      category: ["fashion", "women"],
      tag: ["fashion", "women", "coat", "full sleeve"],
      variation: [
        {
          color: "blue",
          image: "/assets/img/product/fashion/2.jpg",
          size: [
            { name: "x", stock: 3 },
            { name: "m", stock: 6 },
            { name: "xl", stock: 7 },
          ],
        },
        {
          color: "brown",
          image: "/assets/img/product/fashion/4.jpg",
          size: [
            { name: "x", stock: 4 },
            { name: "m", stock: 8 },
            { name: "xl", stock: 3 },
            { name: "xxl", stock: 7 },
          ],
        },
        {
          color: "black",
          image: "/assets/img/product/fashion/5.jpg",
          size: [
            { name: "x", stock: 3 },
            { name: "m", stock: 7 },
            { name: "xl", stock: 0 },
            { name: "xxl", stock: 7 },
          ],
        },
      ],
      image: [
        "/assets/img/product/fashion/4.jpg",
        "/assets/img/product/fashion/2.jpg",
        "/assets/img/product/fashion/5.jpg",
        "/assets/img/product/fashion/7.jpg",
        "/assets/img/product/fashion/9.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    },
  ]

  return (
    <Fragment>
      <Breadcrumb />

      <div className="cart-main-area pt-90 pb-100">
        <div className="container">
          {wishlistItems && wishlistItems.length >= 1 ? (
            <Fragment>
              <h3 className="cart-page-title">Your wishlist items</h3>
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Unit Price</th>
                          <th>Add To Cart</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItems.map((wishlistItem, key) => {
                          const discountedPrice = getDiscountPrice(
                            wishlistItem.price,
                            wishlistItem.discount
                          )

                          const finalProductPrice = (
                            wishlistItem.price * config.currency.currencyRate
                          ).toFixed(2)
                          const finalDiscountedPrice = (
                            discountedPrice * config.currency.currencyRate
                          ).toFixed(2)
                          const cartItem = cartItems.filter(
                            (item) => item.id === wishlistItem.id
                          )[0]

                          return (
                            <tr key={key}>
                              <td className="product-thumbnail">
                                <Link to={process.env.PUBLIC_URL + "/product/" + wishlistItem.id}>
                                  <img
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + wishlistItem.image[0]}
                                    alt=""
                                  />
                                </Link>
                              </td>

                              <td className="product-name text-center">
                                <Link to={process.env.PUBLIC_URL + "/product/" + wishlistItem.id}>
                                  {wishlistItem.name}
                                </Link>
                              </td>

                              <td className="product-price-cart">
                                {discountedPrice !== null ? (
                                  <Fragment>
                                    <span className="amount old">
                                      {config.currency.currencySymbol + finalProductPrice}
                                    </span>
                                    <span className="amount">
                                      {config.currency.currencySymbol + finalDiscountedPrice}
                                    </span>
                                  </Fragment>
                                ) : (
                                  <span className="amount">
                                    {config.currency.currencySymbol + finalProductPrice}
                                  </span>
                                )}
                              </td>

                              <td className="product-wishlist-cart">
                                {wishlistItem.affiliateLink ? (
                                  <a
                                    href={wishlistItem.affiliateLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Buy now
                                  </a>
                                ) : wishlistItem.variation && wishlistItem.variation.length >= 1 ? (
                                  <Link to={`${process.env.PUBLIC_URL}/product/${wishlistItem.id}`}>
                                    Select option
                                  </Link>
                                ) : wishlistItem.stock && wishlistItem.stock > 0 ? (
                                  <button
                                    className={
                                      cartItem !== undefined && cartItem.quantity > 0
                                        ? "active"
                                        : ""
                                    }
                                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                                    title={
                                      wishlistItem !== undefined ? "Added to cart" : "Add to cart"
                                    }
                                  >
                                    {cartItem !== undefined && cartItem.quantity > 0
                                      ? "Added"
                                      : "Add to cart"}
                                  </button>
                                ) : (
                                  <button disabled className="active">
                                    Out of stock
                                  </button>
                                )}
                              </td>

                              <td className="product-remove">
                                <button>
                                  <i className="fa fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="cart-shiping-update-wrapper">
                    <div className="cart-shiping-update">
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Continue Shopping
                      </Link>
                    </div>
                    <div className="cart-clear">
                      <button>Clear Wishlist</button>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-30">
                    <i className="pe-7s-like"></i>
                  </div>
                  <div className="item-empty-area__text">
                    No items found in wishlist <br />
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>Add Items</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Wishlist
