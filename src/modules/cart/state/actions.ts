import { AppThunk } from "../../../app/store"
import { CartRepository, ProductRepository, UserRepository } from "../../../data"
import { changeCartItems, loading } from "./state"

export interface ICartActions {
  addToCart(product: any, quantity: number, variants: any): AppThunk
  decreaseQuantity(): AppThunk
  deleteAllFromCart(): AppThunk
  deleteFromCart(product: any): AppThunk
  cartItemStock(): any
}

export function cartActions(
  productRepository: ProductRepository,
  userRepository: UserRepository,
  cartRepository: CartRepository
): ICartActions {
  function addToCart(product: any, quantity: number, variants: any): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

      const result = await cartRepository.addToCart(
        product,
        quantity,
        variants,
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

      const result = await cartRepository.deleteFromCart(product,  getState().cart.cartItems)

      dispatch(changeCartItems(result))
    }
  }

  function deleteAllFromCart(): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

      // const heroProducts = await repository.getHeroProducts()

      // dispatch(heroProductsLoad(heroProducts))
    }
  }

  function cartItemStock(): any {}

  return {
    addToCart,
    decreaseQuantity,
    deleteFromCart,
    deleteAllFromCart,
    cartItemStock,
  }
}
