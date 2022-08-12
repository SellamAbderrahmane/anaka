import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { configState } from "../../../app/config"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ProductRating } from "../../../ui/components"
import Breadcrumb from "../../../ui/components/Breadcrumb"
import { getDiscountPrice, getProductPrice, isProductExist } from "../../../utils"
import { useCart } from "../../contexts"
import { CartState, currentCartState } from "../state"

export const Compare = () => {
  const cart = useCart()
  const dispatch = useAppDispatch()
  const config = useAppSelector(configState)
  const cartState = useAppSelector(currentCartState)
console.log(cartState.cartItems);

  const addToCart = (product: any) => {
    dispatch(cart.addToCart(product, 1, null, null))
  }

  const removeFromCompare = (product: any) => {
    dispatch(cart.addToCompareList(product))
  }

  return (
    <Fragment>
      <Breadcrumb />
      <div className='compare-main-area pt-90 pb-100'>
        <div className='container'>
          {cartState.compareItems.length >= 1 ? (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='compare-page-content'>
                  <div className='compare-table table-responsive'>
                    <table className='table table-bordered mb-0'>
                      <tbody>
                        <CompareBody
                          addToCart={addToCart}
                          removeFromCompare={removeFromCompare}
                          cartState={cartState}
                          currency={config.currency}
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='item-empty-area text-center'>
                  <div className='item-empty-area__icon mb-30'>
                    <i className='pe-7s-shuffle'></i>
                  </div>
                  <div className='item-empty-area__text'>
                    No items found in compare
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

const CompareBody = ({
  cartState,
  currency,
  addToCart,
  removeFromCompare,
}: {
  cartState: CartState
  currency: any
  addToCart: any
  removeFromCompare: any
}) => {
  return (
    <Fragment>
      <tr>
        <th className='title-column'>Product Info</th>
        {cartState.compareItems.map((compareItem, key) => {
          const cartItem = isProductExist(compareItem.id, cartState.cartItems)
          return (
            <td className='product-image-title' key={key}>
              <div className='compare-remove'>
                <button onClick={() => removeFromCompare(compareItem)}>
                  <i className='pe-7s-trash' />
                </button>
              </div>
              <Link to={process.env.PUBLIC_URL + "/product/" + compareItem.id} className='image'>
                <img
                  className='img-fluid'
                  src={process.env.PUBLIC_URL + compareItem.image[0]}
                  alt=''
                />
              </Link>
              <div className='product-title'>
                <Link to={process.env.PUBLIC_URL + "/product/" + compareItem.id}>
                  {compareItem.name}
                </Link>
              </div>
              <div className='compare-btn'>
                {compareItem.affiliateLink ? (
                  <a href={compareItem.affiliateLink} rel='noopener noreferrer' target='_blank'>
                    Buy now
                  </a>
                ) : compareItem.variant_groups ? (
                  <Link to={`${process.env.PUBLIC_URL}/product/${compareItem.id}`}>
                    Select Option
                  </Link>
                ) : compareItem.stock > 0 ? (
                  <button
                    className={cartItem ? "active" : ""}
                    disabled={cartItem}
                    onClick={() => addToCart(compareItem)}
                    title={cartItem ? "Added to cart" : "Add to cart"}
                  >
                    {cartItem ? "Added" : "Add to cart"}
                  </button>
                ) : (
                  <button disabled className='active'>
                    Out of Stock
                  </button>
                )}
              </div>
            </td>
          )
        })}
      </tr>

      <tr>
        <th className='title-column'>Price</th>
        {cartState.compareItems.map((compareItem, key) => {
          const productPrice = getProductPrice(compareItem.price, null, currency)
          const finalDiscountedPrice = getDiscountPrice(
            productPrice,
            compareItem.discount,
            currency
          )

          return (
            <td className='product-price' key={key}>
              {finalDiscountedPrice ? (
                <Fragment>
                  <span className='amount old'>
                    {currency.currencySymbol + finalDiscountedPrice}
                  </span>
                  <span className='amount'>{currency.currencySymbol + finalDiscountedPrice}</span>
                </Fragment>
              ) : (
                <span className='amount'>{currency.currencySymbol + productPrice}</span>
              )}
            </td>
          )
        })}
      </tr>

      <tr>
        <th className='title-column'>Description</th>
        {cartState.compareItems.map((compareItem, key) => {
          return (
            <td className='product-desc' key={key}>
              <p>{compareItem.shortDescription ? compareItem.shortDescription : "N/A"}</p>
            </td>
          )
        })}
      </tr>

      <tr>
        <th className='title-column'>Rating</th>
        {cartState.compareItems.map((compareItem, key) => {
          return (
            <td className='product-rating' key={key}>
              <ProductRating ratingValue={compareItem.rating} />
            </td>
          )
        })}
      </tr>
    </Fragment>
  )
}

export default Compare
