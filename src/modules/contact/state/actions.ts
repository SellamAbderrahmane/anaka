import { toast } from "react-toastify"
import { AppThunk } from "../../../app/store"
import { UserRepository } from "../../../data"
import { loading, subscribeSuccess } from "./state"

export interface IContactActions {
  subscribe(data: any): AppThunk
}

export function contactActions(userRepository: UserRepository): IContactActions {
  function subscribe(data: any): AppThunk {
    return async (dispatch, getState) => {
      dispatch(loading())

     const result = await userRepository.contactSubscribe(data)

      dispatch(subscribeSuccess(result.message))
    }
  }

  return {
    subscribe,
  }
}
