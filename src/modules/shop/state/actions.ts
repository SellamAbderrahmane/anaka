import { loading, productsLoaded } from "./state"
import { AppThunk } from "../../../app/store"
import { ProductRepository } from "../../../data"

export interface IShopActions {
  loadProducts(filters?: any): any
}

export function ShopActions(repository: ProductRepository): IShopActions {
  function loadProducts(filters: any): AppThunk {
    return async (dispatch: any) => {
      dispatch(loading())
      // call repository
      const result = await repository.getProducts(filters)

      //dispatch new data
      dispatch(productsLoaded(result))
    }
  }

  return {
    loadProducts
  }
}
