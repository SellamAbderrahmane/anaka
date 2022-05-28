import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import Breadcrumb from "../../ui/components/Breadcrumb"
import { getDiscountPrice } from "../../utils"

export const Cart = ({
  location,
  cartItems,
  currency = {
    currencyRate: 12,
    currencySymbol: "$"
  },
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
}: any) => {
  const [quantityCount] = useState(1)
  // const { pathname } = location
  let cartTotalPrice = 0

  cartItems = [
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
      quantity: 1,
      selectedProductColor: "blue",
      selectedProductSize: "x",
      cartItemId: "b7c4a2eb-9803-4951-a214-e53895749230",
    },
  ]
  return (
    <Fragment>
      <Breadcrumb />

      <div className="cart-main-area pt-90 pb-100">
        <div className="container">
          {cartItems && cartItems.length >= 1 ? (
            <Fragment>
              <h3 className="cart-page-title">Your cart items</h3>
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Unit Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((cartItem, key) => {
                          const discountedPrice = getDiscountPrice(
                            cartItem.price,
                            cartItem.discount
                          )

                          const finalProductPrice = (
                            cartItem.price * currency.currencyRate
                          ).toFixed(2)

                          const finalDiscountedPrice = (
                            discountedPrice * currency.currencyRate
                          ).toFixed(2)

                          cartTotalPrice += 100

                          return (
                            <tr key={key}>
                              <td className="product-thumbnail">
                                <Link to={process.env.PUBLIC_URL + "/product/" + cartItem.id}>
                                  <img
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + cartItem.image[0]}
                                    alt=""
                                  />
                                </Link>
                              </td>

                              <td className="product-name">
                                <Link to={process.env.PUBLIC_URL + "/product/" + cartItem.id}>
                                  {cartItem.name}
                                </Link>
                                {cartItem.selectedProductColor && cartItem.selectedProductSize ? (
                                  <div className="cart-item-variation">
                                    <span>Color: {cartItem.selectedProductColor}</span>
                                    <span>Size: {cartItem.selectedProductSize}</span>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </td>

                              <td className="product-price-cart">
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

                              <td className="product-quantity">
                                <div className="cart-plus-minus">
                                  <button className="dec qtybutton">-</button>
                                  <input
                                    className="cart-plus-minus-box"
                                    type="text"
                                    value={cartItem.quantity}
                                    readOnly
                                  />
                                  <button className="inc qtybutton">+</button>
                                </div>
                              </td>
                              <td className="product-subtotal">{1000}</td>

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
                      <button>Clear Shopping Cart</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="cart-tax">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gray">
                        Estimate Shipping And Tax
                      </h4>
                    </div>
                    <div className="tax-wrapper">
                      <p>Enter your destination to get a shipping estimate.</p>
                      <div className="tax-select-wrapper">
                        <div className="tax-select">
                          <label>* Country</label>
                          <select className="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                        <div className="tax-select">
                          <label>* Region / State</label>
                          <select className="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                        <div className="tax-select">
                          <label>* Zip/Postal Code</label>
                          <input type="text" />
                        </div>
                        <button className="cart-btn-2" type="submit">
                          Get A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="discount-code-wrapper">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                    </div>
                    <div className="discount-code">
                      <p>Enter your coupon code if you have one.</p>
                      <form>
                        <input type="text" required name="name" />
                        <button className="cart-btn-2" type="submit">
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <div className="grand-totall">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                    </div>
                    <h5>
                      Total products{" "}
                      <span>{currency.currencySymbol + cartTotalPrice.toFixed(2)}</span>
                    </h5>

                    <h4 className="grand-totall-title">
                      Grand Total <span>{currency.currencySymbol + cartTotalPrice.toFixed(2)}</span>
                    </h4>
                    <Link to={process.env.PUBLIC_URL + "/checkout"}>Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-30">
                    <i className="pe-7s-cart"></i>
                  </div>
                  <div className="item-empty-area__text">
                    No items found in cart <br />{" "}
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>Shop Now</Link>
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

export default Cart
