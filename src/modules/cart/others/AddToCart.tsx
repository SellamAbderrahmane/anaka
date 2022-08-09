import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getProductCartQuantity } from "../../../utils"
import { useCart } from "../../contexts"
import { currentCartState } from "../state"

export const AddToCart = ({ product, variation, finalPrice }: any) => {
  const cartActions = useCart()
  const dispatch = useAppDispatch()
  const state = useAppSelector(currentCartState)

  const [quantityCount, setQuantityCount] = useState(1)
  const [productCartQty, setProductCartQty] = useState(0)
  const [wishlistItem, setWishlistItem] = useState(false)
  const [compareItem, setCompareItem] = useState(false)

  useEffect(() => {
    setProductCartQty(getProductCartQuantity(state.cartItems, product, variation))
  }, [variation, state.cartItems])

  const addToCart = () => {
    dispatch(cartActions.addToCart(product, quantityCount, variation, finalPrice))
  }

  const addToWishlist = () => {
    console.log("todo")
  }

  const addToCompare = () => {
    console.log("todo")
  }

  const setQuantity = (type: "add" | "remove") => {
    if (!variation) {
      return
    }

    if (type === "remove") {
      setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
    } else if (quantityCount < variation.inventory - productCartQty) {
      setQuantityCount(quantityCount + 1)
    }
  }

  return (
    <div className='pro-details-quality'>
      <div className='cart-plus-minus'>
        <button onClick={() => setQuantity("remove")} className='dec qtybutton'>
          -
        </button>
        <input className='cart-plus-minus-box' type='text' value={quantityCount} readOnly />
        <button onClick={() => setQuantity("add")} className='inc qtybutton'>
          +
        </button>
      </div>
      <div className='pro-details-cart btn-hover'>
        {variation && variation.inventory > 0 && variation.inventory > productCartQty ? (
          <button onClick={() => addToCart()} disabled={productCartQty >= variation.inventory}>
            Add To Cart
          </button>
        ) : (
          <button disabled>Out of Stock</button>
        )}
      </div>
      <div className='pro-details-wishlist'>
        <button
          className={wishlistItem ? "active" : ""}
          disabled={wishlistItem}
          title={wishlistItem ? "Added to wishlist" : "Add to wishlist"}
          onClick={() => addToWishlist()}
        >
          <i className='pe-7s-like' />
        </button>
      </div>
      <div className='pro-details-compare'>
        <button
          className={compareItem ? "active" : ""}
          disabled={compareItem}
          title={compareItem ? "Added to compare" : "Add to compare"}
          onClick={() => addToCompare()}
        >
          <i className='pe-7s-shuffle' />
        </button>
      </div>
    </div>
  )
}
