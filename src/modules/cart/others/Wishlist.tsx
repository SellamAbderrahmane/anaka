import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { configState } from "../../../app/config"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import Breadcrumb from "../../../ui/components/Breadcrumb"
import { getDiscountPrice, getProductPrice, isProductExist } from "../../../utils"
import { useCart } from "../../contexts"
import { currentCartState } from "../state"

export const Wishlist = ({ location }: any) => {
  const cart = useCart()
  const dispatch = useAppDispatch()
  const config = useAppSelector(configState)
  const cartState = useAppSelector(currentCartState)

  const deleteItem = (product: any) => {
    dispatch(cart.addToWishList(product))
  }

  const clearWishList = () => {
    dispatch(cart.clearWishList())
  }

  const addToCart = (product: any) => {
    dispatch(cart.addToCart(product, 1, null, product.price))
  }

  return (
    <Fragment>
      <Breadcrumb />

      <div className='cart-main-area pt-90 pb-100'>
        <div className='container'>
          {cartState.wishItems.length > 0 ? (
            <Fragment>
              <h3 className='cart-page-title'>Your wishlist items</h3>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-content table-responsive cart-table-content'>
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
                        {cartState.wishItems.map((product, key) => (
                          <WishlistSingle
                            key={key}
                            wishlistItem={product}
                            currency={config.currency}
                            onDelete={deleteItem}
                            addToCart={addToCart}
                            cartItem={isProductExist(product.id, cartState.cartItems)}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-12'>
                  <div className='cart-shiping-update-wrapper'>
                    <div className='cart-shiping-update'>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Continue Shopping
                      </Link>
                    </div>
                    <div className='cart-clear'>
                      <button onClick={clearWishList}>Clear Wishlist</button>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='item-empty-area text-center'>
                  <div className='item-empty-area__icon mb-30'>
                    <i className='pe-7s-like'></i>
                  </div>
                  <div className='item-empty-area__text'>
                    No items found in wishlist
                    <div>
                      <Link to={process.env.PUBLIC_URL + "/shop"}>Add Items</Link>
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

const WishlistSingle = ({ wishlistItem, cartItem, currency, onDelete, addToCart }) => {
  const productPrice = getProductPrice(wishlistItem.price, null, currency)
  const finalDiscountedPrice = getDiscountPrice(productPrice, wishlistItem.discount, currency)

  return (
    <tr>
      <td className='product-thumbnail'>
        <Link to={process.env.PUBLIC_URL + "/product/" + wishlistItem.id}>
          <img className='img-fluid' src={process.env.PUBLIC_URL + wishlistItem.image[0]} alt='' />
        </Link>
      </td>

      <td className='product-name text-center'>
        <Link to={process.env.PUBLIC_URL + "/product/" + wishlistItem.id}>{wishlistItem.name}</Link>
      </td>

      <td className='product-price-cart'>
        {finalDiscountedPrice ? (
          <Fragment>
            <span className='amount old'>{currency.currencySymbol + finalDiscountedPrice}</span>
            <span className='amount'>{currency.currencySymbol + finalDiscountedPrice}</span>
          </Fragment>
        ) : (
          <span className='amount'>{currency.currencySymbol + productPrice}</span>
        )}
      </td>

      <td className='product-wishlist-cart'>
        {wishlistItem.affiliateLink ? (
          <a href={wishlistItem.affiliateLink} rel='noopener noreferrer' target='_blank'>
            Buy now
          </a>
        ) : wishlistItem.variation && wishlistItem.variation.length >= 1 ? (
          <Link to={`${process.env.PUBLIC_URL}/product/${wishlistItem.id}`}>Select option</Link>
        ) : wishlistItem.stock && wishlistItem.stock > 0 ? (
          <button
            disabled={cartItem}
            className={cartItem ? "active" : ""}
            onClick={() => addToCart(wishlistItem)}
            title={wishlistItem ? "Added to cart" : "Add to cart"}
          >
            {cartItem ? "Added" : "Add to cart"}
          </button>
        ) : (
          <button disabled className='active'>
            Out of stock
          </button>
        )}
      </td>

      <td className='product-remove'>
        <button onClick={() => onDelete(wishlistItem)}>
          <i className='fa fa-times'></i>
        </button>
      </td>
    </tr>
  )
}

export default Wishlist
