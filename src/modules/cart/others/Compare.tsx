import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { ProductRating } from "../../../ui/components"
import Breadcrumb from "../../../ui/components/Breadcrumb"
import { getDiscountPrice } from "../../../utils"

export const Compare = ({
  location,
  cartItems = [],
  compareItems,
  addToCart,
  deleteFromCompare,
  currency = {
    currencyRate: 12,
    currencySymbol: "$",
  },
}: any) => {
  compareItems = [
    {
      id: "92",
      sku: "asdf214",
      name: "Lorem ipsum kids five",
      price: 25.5,
      discount: 10,
      new: true,
      rating: 5,
      saleCount: 25,
      category: ["fashion", "kids"],
      tag: ["fashion", "kids"],
      variation: [
        {
          color: "blue",
          image: "/assets/img/product/fashion/27.jpg",
          size: [
            { name: "x", stock: 3 },
            { name: "m", stock: 6 },
            { name: "xl", stock: 7 },
          ],
        },
        {
          color: "brown",
          image: "/assets/img/product/fashion/28.jpg",
          size: [
            { name: "x", stock: 4 },
            { name: "m", stock: 8 },
            { name: "xl", stock: 3 },
            { name: "xxl", stock: 7 },
          ],
        },
        {
          color: "black",
          image: "/assets/img/product/fashion/29.jpg",
          size: [
            { name: "x", stock: 3 },
            { name: "m", stock: 7 },
            { name: "xl", stock: 0 },
            { name: "xxl", stock: 7 },
          ],
        },
      ],
      image: [
        "/assets/img/product/fashion/27.jpg",
        "/assets/img/product/fashion/28.jpg",
        "/assets/img/product/fashion/29.jpg",
        "/assets/img/product/fashion/30.jpg",
        "/assets/img/product/fashion/23.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    },
    {
      id: "2",
      sku: "asdf124",
      name: "Lorem ipsum coat",
      price: 18.5,
      discount: 15,
      new: false,
      rating: 3,
      saleCount: 12,
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
        "/assets/img/product/fashion/2.jpg",
        "/assets/img/product/fashion/4.jpg",
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
      <div className="compare-main-area pt-90 pb-100">
        <div className="container">
          {compareItems && compareItems.length >= 1 ? (
            <div className="row">
              <div className="col-lg-12">
                <div className="compare-page-content">
                  <div className="compare-table table-responsive">
                    <table className="table table-bordered mb-0">
                      <tbody>
                        <tr>
                          <th className="title-column">Product Info</th>
                          {compareItems.map((compareItem, key) => {
                            const cartItem = cartItems.filter(
                              (item) => item.id === compareItem.id
                            )[0]
                            return (
                              <td className="product-image-title" key={key}>
                                <div className="compare-remove">
                                  <button>
                                    <i className="pe-7s-trash" />
                                  </button>
                                </div>
                                <Link
                                  to={process.env.PUBLIC_URL + "/product/" + compareItem.id}
                                  className="image"
                                >
                                  <img
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + compareItem.image[0]}
                                    alt=""
                                  />
                                </Link>
                                <div className="product-title">
                                  <Link to={process.env.PUBLIC_URL + "/product/" + compareItem.id}>
                                    {compareItem.name}
                                  </Link>
                                </div>
                                <div className="compare-btn">
                                  {compareItem.affiliateLink ? (
                                    <a
                                      href={compareItem.affiliateLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      Buy now
                                    </a>
                                  ) : compareItem.variation && compareItem.variation.length >= 1 ? (
                                    <Link
                                      to={`${process.env.PUBLIC_URL}/product/${compareItem.id}`}
                                    >
                                      Select Option
                                    </Link>
                                  ) : compareItem.stock && compareItem.stock > 0 ? (
                                    <button
                                      className={
                                        cartItem !== undefined && cartItem.quantity > 0
                                          ? "active"
                                          : ""
                                      }
                                      disabled={cartItem !== undefined && cartItem.quantity > 0}
                                      title={
                                        compareItem !== undefined ? "Added to cart" : "Add to cart"
                                      }
                                    >
                                      {cartItem !== undefined && cartItem.quantity > 0
                                        ? "Added"
                                        : "Add to cart"}
                                    </button>
                                  ) : (
                                    <button disabled className="active">
                                      Out of Stock
                                    </button>
                                  )}
                                </div>
                              </td>
                            )
                          })}
                        </tr>
                        <tr>
                          <th className="title-column">Price</th>
                          {compareItems.map((compareItem, key) => {
                            const discountedPrice = getDiscountPrice(
                              compareItem.price,
                              compareItem.discount
                            )
                            const finalProductPrice = (
                              compareItem.price * currency.currencyRate
                            ).toFixed(2)
                            const finalDiscountedPrice = (
                              discountedPrice * currency.currencyRate
                            ).toFixed(2)
                            return (
                              <td className="product-price" key={key}>
                                {discountedPrice !== null ? (
                                  <Fragment>
                                    <span className="amount old">
                                      {currency.currencySymbol + finalProductPrice}
                                    </span>
                                    <span className="amount">
                                      {currency.currencySymbol + finalDiscountedPrice}
                                    </span>
                                  </Fragment>
                                ) : (
                                  <span className="amount">
                                    {currency.currencySymbol + finalProductPrice}
                                  </span>
                                )}
                              </td>
                            )
                          })}
                        </tr>

                        <tr>
                          <th className="title-column">Description</th>
                          {compareItems.map((compareItem, key) => {
                            return (
                              <td className="product-desc" key={key}>
                                <p>
                                  {compareItem.shortDescription
                                    ? compareItem.shortDescription
                                    : "N/A"}
                                </p>
                              </td>
                            )
                          })}
                        </tr>

                        <tr>
                          <th className="title-column">Rating</th>
                          {compareItems.map((compareItem, key) => {
                            return (
                              <td className="product-rating" key={key}>
                                <ProductRating ratingValue={compareItem.rating} />
                              </td>
                            )
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-30">
                    <i className="pe-7s-shuffle"></i>
                  </div>
                  <div className="item-empty-area__text">
                    No items found in compare <br />
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

export default Compare
