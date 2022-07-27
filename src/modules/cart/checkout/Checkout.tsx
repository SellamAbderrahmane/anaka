import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { configState } from "../../../app/config"
import { useAppSelector } from "../../../app/hooks"
import Breadcrumb from "../../../ui/components/Breadcrumb"
import { getDiscountPrice } from "../../../utils"

export const Checkout = ({ location, cartItems }: any) => {
  const config = useAppSelector(configState)

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

      <div className="checkout-area pt-95 pb-100">
        <div className="container">
          {cartItems && cartItems.length >= 1 ? (
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>First Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Last Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>Company Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-select mb-20">
                        <label>Country</label>
                        <select>
                          <option>Select a country</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>Street Address</label>
                        <input
                          className="billing-address"
                          placeholder="House number and street name"
                          type="text"
                        />
                        <input placeholder="Apartment, suite, unit etc." type="text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>Town / City</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>State / County</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Postcode / ZIP</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Phone</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Email Address</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <div className="additional-info-wrap">
                    <h4>Additional information</h4>
                    <div className="additional-info">
                      <label>Order notes</label>
                      <textarea
                        placeholder="Notes about your order, e.g. special notes for delivery. "
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="your-order-area">
                  <h3>Your order</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>Product</li>
                          <li>Total</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        <ul>
                          {cartItems.map((cartItem, key) => {
                            const discountedPrice = getDiscountPrice(
                              cartItem.price,
                              cartItem.discount
                            )
                            const finalProductPrice = cartItem.price * config.currency.currencyRate

                            const finalDiscountedPrice =
                              discountedPrice * config.currency.currencyRate

                            discountedPrice != null
                              ? (cartTotalPrice += finalDiscountedPrice * cartItem.quantity)
                              : (cartTotalPrice += finalProductPrice * cartItem.quantity)
                            return (
                              <li key={key}>
                                <span className="order-middle-left">
                                  {cartItem.name} X {cartItem.quantity}
                                </span>{" "}
                                <span className="order-price">
                                  {discountedPrice !== null
                                    ? config.currency.currencySymbol +
                                      (finalDiscountedPrice * cartItem.quantity).toFixed(2)
                                    : config.currency.currencySymbol +
                                      (finalProductPrice * cartItem.quantity).toFixed(2)}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">Shipping</li>
                          <li>Free shipping</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">Total</li>
                          <li>{config.currency.currencySymbol + cartTotalPrice.toFixed(2)}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method"></div>
                  </div>
                  <div className="place-order mt-25">
                    <button className="btn-hover">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-30">
                    <i className="pe-7s-cash"></i>
                  </div>
                  <div className="item-empty-area__text">
                    No items found in cart to checkout <br />{" "}
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

export default Checkout
