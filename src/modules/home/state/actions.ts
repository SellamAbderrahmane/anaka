import { AppThunk } from "../../../app/store"
import { incrementAsync, loading } from "./state"

export interface IHomeActions {
  increment: (d: any) => AppThunk
}

export function counterActions(repository: any): IHomeActions {

  const increment = (amount: number): AppThunk => {
    return async (dispatch, getState) => {
      dispatch(loading())
      setTimeout(() => {
        dispatch(incrementAsync(amount))
      }, 1000)
    }
  }

  return {
    increment,
  }
}
