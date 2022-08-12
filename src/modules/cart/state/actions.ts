import { toast } from "react-toastify"
import { AppThunk } from "../../../app/store"
import { CartRepository, ProductRepository, UserRepository } from "../../../data"
import { changeCartItems, changeCompareItems, changeWishItems, loading } from "./state"

export interface ICartActions {
  addToCart(product: any, quantity: number, variation: any, finalPrice: any): AppThunk
  addToWishList(product: any): AppThunk
  clearWishList(): AppThunk
  addToCompareList(product: any): AppThunk
  decreaseQuantity(): AppThunk
  clearCart(): AppThunk
  deleteFromCart(product: any): AppThunk
  cartItemStock(): any
}

export function cartActions(
  productRepository: ProductRepository,
  userRepository: UserRepository,
  cartRepository: CartRepository
): ICartActions {
  function addToCart(product: any, quantity: number, variation: any, finalPrice: any): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

      const result = await cartRepository.addToCart(
        product,
        quantity,
        variation,
        finalPrice,
        getState().cart.cartItems
      )

      dispatch(changeCartItems(result))
    }
  }

  function decreaseQuantity(): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

      // const heroProducts = await repository.getHeroProducts()

      // dispatch(heroProductsLoad(heroProducts))
    }
  }

  function deleteFromCart(product: any): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

      const result = await cartRepository.deleteFromCart(product, getState().cart.cartItems)

      dispatch(changeCartItems(result))
    }
  }

  function clearCart(): AppThunk {
    return async (dispatch) => {
      dispatch(changeCartItems([]))
    }
  }

  function cartItemStock(): any {}

  function addToWishList(product: any): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading("wishLoading"))
      const result = await cartRepository.addToWishList(product, getState().cart.wishItems)
      dispatch(changeWishItems(result))
    }
  }

  function addToCompareList(product: any): AppThunk {
    return async (dispatch, getState) => {
      const compareItems = getState().cart.compareItems
      dispatch(loading("compareLoading"))
      const result = await cartRepository.addToCompare(product, compareItems)
      
      if(!result) {
        return toast.info('Max compare items')
      }

      dispatch(changeCompareItems(result))
    }
  }

  function clearWishList(): AppThunk {
    return async (dispatch) => {
      dispatch(changeCompareItems([]))
    }
  }

  return {
    addToCart,
    addToWishList,
    clearWishList,
    addToCompareList,
    decreaseQuantity,
    deleteFromCart,
    clearCart,
    cartItemStock,
  }
}
