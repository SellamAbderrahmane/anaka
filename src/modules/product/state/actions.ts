import { AppThunk } from "../../../app/store"
import { ProductRepository } from "../../../data"
import { loading, productInfoLoaded } from "./state"

export interface IProductActions {
  loadProductInfo(productID: any): AppThunk
}

export function productActions(productRepository: ProductRepository): IProductActions {
  function loadProductInfo(productID: any): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

      const product = await productRepository.getProductInfo(productID)

      dispatch(productInfoLoaded(product))
    }
  }

  return {
    loadProductInfo,
  }
}
