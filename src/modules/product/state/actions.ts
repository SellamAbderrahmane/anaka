import { AppThunk } from "../../../app/store"
import { ProductRepository } from "../../../data"
import { loading, productInfoLoaded, reviewAdded } from "./state"

export interface IProductActions {
  loadProductInfo(productID: any): AppThunk
  addReview(review: any): AppThunk
}

export function productActions(productRepository: ProductRepository): IProductActions {
  function loadProductInfo(productID: any): AppThunk {
    return async (dispatch) => {
      dispatch(loading())

      const product = await productRepository.getProductInfo(productID)

      dispatch(productInfoLoaded(product))
    }
  }

  function addReview(review: any): AppThunk {
    return async (dispatch) => {
      // dispatch(loading())

      const addedReview = await productRepository.addReview(review)

      dispatch(reviewAdded(addedReview))
    }
  }

  return {
    loadProductInfo,
    addReview
  }
}
