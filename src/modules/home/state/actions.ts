import { AppThunk } from "../../../app/store"
import { ProductRepository, UserRepository } from "../../../data"
import { dailyLoading, dailyProductsLoaded, heroProductsLoad, loading, subscribeSuccess } from "./state"

export interface IHomeActions {
  getHerosProducts(): AppThunk
  getDailyProducts(): AppThunk
  subscribe(email: string): AppThunk
}

export function homeActions(
  repository: ProductRepository,
  userRepository: UserRepository
): IHomeActions {
  function getHerosProducts(): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

      const heroProducts = await repository.getHeroProducts()

      dispatch(heroProductsLoad(heroProducts))
    }
  }

  function getDailyProducts(): AppThunk {
    return async (dispatch, getState) => {
      dispatch(dailyLoading())

      const dailyProducts = await repository.getDailyProducts()

      dispatch(dailyProductsLoaded(dailyProducts))
    }
  }

  function subscribe(email: string): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

      const heroProducts = await userRepository.subscribe(email)

      dispatch(subscribeSuccess())
    }
  }

  return {
    subscribe,
    getHerosProducts,
    getDailyProducts,
  }
}
