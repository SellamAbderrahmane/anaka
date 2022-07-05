import React, { Fragment, useEffect, useState } from "react"
import { useToasts } from "react-toast-notifications"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getProductCartQuantity } from "../../../utils"
import { useCart } from "../../contexts"
import { currentCartState } from "../state"

export const AddToCart = ({ product, variants }: any) => {
  const cartActions = useCart()
  const dispatch = useAppDispatch()
  const state = useAppSelector(currentCartState)
  const { addToast } = useToasts()

  const [quantityCount, setQuantityCount] = useState(1)
  const [productCartQty, setProductCartQty] = useState(0)
  const [wishlistItem, setWishlistItem] = useState(false)
  const [compareItem, setCompareItem] = useState(false)

  const [productStock, setProductStock] = useState(0)

  useEffect(() => {
    setProductStock(product.variation ? product.variation[0].size[0].stock : product.stock)
  }, [product])

  useEffect(() => {
    setProductCartQty(getProductCartQuantity(state.cartItems, product, variants))
  }, [state.cartItems])

  const addToCart = () => {

    dispatch(cartActions.addToCart(product, quantityCount, variants))
  }

  const addToWishlist = () => {
    console.log("todo")
  }

  const addToCompare = () => {
    console.log("todo")
  }

  const setQuantity = (type: "add" | "remove") => {
    if (type === "remove") {
      setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
    } else if (quantityCount < productStock - productCartQty) {
      setQuantityCount(quantityCount + 1)
    }
  }

  return (
    <div className="pro-details-quality">
      <div className="cart-plus-minus">
        <button onClick={() => setQuantity("remove")} className="dec qtybutton">
          -
        </button>
        <input className="cart-plus-minus-box" type="text" value={quantityCount} readOnly />
        <button onClick={() => setQuantity("add")} className="inc qtybutton">
          +
        </button>
      </div>
      <div className="pro-details-cart btn-hover">
        {productStock && productStock > 0 && productStock > productCartQty ? (
          <button onClick={() => addToCart()} disabled={productCartQty >= productStock}>
            Add To Cart
          </button>
        ) : (
          <button disabled>Out of Stock</button>
        )}
      </div>
      <div className="pro-details-wishlist">
        <button
          className={wishlistItem !== undefined ? "active" : ""}
          disabled={wishlistItem !== undefined}
          title={wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist"}
          onClick={() => addToWishlist()}
        >
          <i className="pe-7s-like" />
        </button>
      </div>
      <div className="pro-details-compare">
        <button
          className={compareItem !== undefined ? "active" : ""}
          disabled={compareItem !== undefined}
          title={compareItem !== undefined ? "Added to compare" : "Add to compare"}
          onClick={() => addToCompare()}
        >
          <i className="pe-7s-shuffle" />
        </button>
      </div>
    </div>
  )
}
