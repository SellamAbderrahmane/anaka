import React, { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { configState } from "../../app/config"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Breadcrumb from "../../ui/components/Breadcrumb"
import { canIncreaseQty, getDiscountPrice, getProductCartQuantity, getProductPrice } from "../../utils"
import { useCart } from "../contexts"
import { currentCartState } from "./state"

export const Cart = ({ location }: any) => {
  const cart = useCart()
  const dispatch = useAppDispatch()
  const config = useAppSelector(configState)
  const cartState = useAppSelector(currentCartState)

  const clearCartItems = () => {
    dispatch(cart.clearCart())
  }

  const deleteItem = (product: any) => {
    dispatch(cart.deleteFromCart(product))
  }

  const increaseQuantity = (product: any, qty: number, finalDiscountedPrice: number) => {
    console.log(product);
    
    dispatch(cart.addToCart(product, qty, product.variation, finalDiscountedPrice))
  }

  const decreaseQuantity = (product: any, qty: number, finalDiscountedPrice: number) => {
    dispatch(cart.addToCart(product, qty, product.variation, finalDiscountedPrice))
  }

  return (
    <Fragment>
      <Breadcrumb />

      <div className='cart-main-area pt-90 pb-100'>
        <div className='container'>
          {cartState.cartItems.length >= 1 ? (
            <Fragment>
              <h3 className='cart-page-title'>Your cart items</h3>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-content table-responsive cart-table-content'>
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
                        {cartState.cartItems.map((cartItem, key) => {
                          return (
                            <CartSingle
                              key={key}
                              cartItem={cartItem}
                              onDelete={deleteItem}
                              currency={config.currency}
                              increaseQuantity={increaseQuantity}
                              decreaseQuantity={decreaseQuantity}
                            />
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='cart-shiping-update-wrapper'>
                    <div className='cart-shiping-update'>
                      <Link to={process.env.PUBLIC_URL + "/shop"}>Continue Shopping</Link>
                    </div>
                    <div className='cart-clear'>
                      <button onClick={clearCartItems}>Clear Shopping Cart</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <div className='cart-tax'>
                    <div className='title-wrap'>
                      <h4 className='cart-bottom-title section-bg-gray'>
                        Estimate Shipping And Tax
                      </h4>
                    </div>
                    <div className='tax-wrapper'>
                      <p>Enter your destination to get a shipping estimate.</p>
                      <div className='tax-select-wrapper'>
                        <div className='tax-select'>
                          <label>* Country</label>
                          <select className='email s-email s-wid'>
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                        <div className='tax-select'>
                          <label>* Region / State</label>
                          <select className='email s-email s-wid'>
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                        <div className='tax-select'>
                          <label>* Zip/Postal Code</label>
                          <input type='text' />
                        </div>
                        <button className='cart-btn-2' type='submit'>
                          Get A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='discount-code-wrapper'>
                    <div className='title-wrap'>
                      <h4 className='cart-bottom-title section-bg-gray'>Use Coupon Code</h4>
                    </div>
                    <div className='discount-code'>
                      <p>Enter your coupon code if you have one.</p>
                      <form>
                        <input type='text' required name='name' />
                        <button className='cart-btn-2' type='submit'>
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-12'>
                  <div className='grand-totall'>
                    <div className='title-wrap'>
                      <h4 className='cart-bottom-title section-bg-gary-cart'>Cart Total</h4>
                    </div>
                    <h5>
                      Total products
                      <span>
                        {config.currency.currencySymbol + cartState.cartTotalPrice.toFixed(2)}
                      </span>
                    </h5>

                    <h4 className='grand-totall-title'>
                      Grand Total
                      <span>
                        {config.currency.currencySymbol + cartState.cartTotalPrice.toFixed(2)}
                      </span>
                    </h4>
                    <Link to={process.env.PUBLIC_URL + "/checkout"}>Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='item-empty-area text-center'>
                  <div className='item-empty-area__icon mb-30'>
                    <i className='pe-7s-cart'></i>
                  </div>
                  <div className='item-empty-area__text'>
                    No items found in cart
                    <div>
                      <Link to={process.env.PUBLIC_URL + "/shop"}>Shop Now</Link>
                    </div>
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

const CartSingle = ({ cartItem, currency, onDelete, decreaseQuantity, increaseQuantity }) => {
  console.log(cartItem)

  const productPrice = getProductPrice(cartItem.price, null, currency)
  const finalDiscountedPrice = getDiscountPrice(productPrice, cartItem.discount, currency)

  return (
    <tr>
      <td className='product-thumbnail'>
        <Link to={process.env.PUBLIC_URL + "/product/" + cartItem.id}>
          <img className='img-fluid' src={process.env.PUBLIC_URL + cartItem.image[0]} alt='' />
        </Link>
      </td>

      <td className='product-name'>
        <Link to={process.env.PUBLIC_URL + "/product/" + cartItem.id}>{cartItem.name}</Link>
        {/* {cartItem.selectedProductColor && cartItem.selectedProductSize && (
          <div className='cart-item-variation'>
            <span>Color: {cartItem.selectedProductColor}</span>
            <span>Size: {cartItem.selectedProductSize}</span>
          </div>
        )} */}
      </td>

      <td className='product-price-cart'>
        {finalDiscountedPrice ? (
          <Fragment>
            <span className='amount old'>{currency.currencySymbol + productPrice}</span>
            <span className='amount'>{currency.currencySymbol + finalDiscountedPrice}</span>
          </Fragment>
        ) : (
          <span className='amount'>{currency.currencySymbol + productPrice}</span>
        )}
      </td>

      <td className='product-quantity'>
        <div className='cart-plus-minus'>
          <button
            className='dec qtybutton'
            onClick={() => decreaseQuantity(cartItem, -1, finalDiscountedPrice)}
          >
            -
          </button>
          <input className='cart-plus-minus-box' type='text' value={cartItem.quantity} readOnly />
          <button
            className='inc qtybutton'
            disabled={!canIncreaseQty(cartItem, 1)}
            onClick={() => canIncreaseQty(cartItem, 1) && increaseQuantity(cartItem, 1, finalDiscountedPrice)}
          >
            +
          </button>
        </div>
      </td>
      <td className='product-subtotal'>{cartItem.finalPrice?.toFixed(2) || 0}</td>

      <td className='product-remove'>
        <button onClick={() => onDelete(cartItem)}>
          <i className='fa fa-times'></i>
        </button>
      </td>
    </tr>
  )
}

export default Cart
