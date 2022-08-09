import React, { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import Spinner from "../../../ui/components/spinner/Spinner"
import { useCart } from "../../contexts"
import { currentCartState } from "../state"
// import { useToasts } from "react-toast-notifications";

const MenuCart = ({ currency }) => {
  const cartActions = useCart()
  const dispatch = useAppDispatch()
  const state = useAppSelector(currentCartState)

  const deleteFromCart = (product: any) => {
    dispatch(cartActions.deleteFromCart(product))
  }

  if (state.cartItems && state.cartItems.length > 0) {
    return (
      <div className='shopping-cart-content'>
        <Spinner spinning={state.status === "loading"}>
          <Fragment>
            <ul>
              {state.cartItems.map((single, key) => {
                return (
                  <li className='single-shopping-cart' key={key}>
                    <div className='shopping-cart-img'>
                      <Link to={process.env.PUBLIC_URL + "/product/" + single.id}>
                        <img
                          alt=''
                          src={process.env.PUBLIC_URL + single.image[0]}
                          className='img-fluid'
                        />
                      </Link>
                    </div>
                    <div className='shopping-cart-title'>
                      <h4>
                        <Link to={process.env.PUBLIC_URL + "/product/" + single.id}>
                          {single.name}
                        </Link>
                      </h4>
                      {single.variation && (
                        <div className='cart-item-variation'>
                          <span>{single.variation.description}</span>
                        </div>
                      )}
                      <h6>Qty: {single.quantity}</h6>
                      <span>{currency.currencySymbol + single.finalPrice}</span>
                    </div>
                    <div className='shopping-cart-delete'>
                      <button onClick={() => deleteFromCart(single)}>
                        <i className='fa fa-times-circle' />
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className='shopping-cart-total'>
              <h4>
                Total :
                <span className='shop-total'>
                  {currency.currencySymbol + state.cartTotalPrice.toFixed(2)}
                </span>
              </h4>
            </div>
            <div className='shopping-cart-btn btn-hover text-center'>
              <Link className='default-btn' to='/cart'>
                view cart
              </Link>
              <Link className='default-btn' to='/checkout'>
                checkout
              </Link>
            </div>
          </Fragment>
        </Spinner>
      </div>
    )
  }

  return (
    <div className='shopping-cart-content'>
      <p className='text-center'>No items added to cart</p>
    </div>
  )
}

export default MenuCart
