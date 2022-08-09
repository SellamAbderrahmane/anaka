import { AppThunk } from "../../../app/store"
import { ServerException } from "../../../data"
import AuthRepository from "../../../data/repositories/userRepository"
import { TOKEN } from "../../../utils"
import { loading, loginError, loginSuccess } from "./state"

export interface AuthActionsCreators {
  login(userData: any): AppThunk<any>
  signUp(userData: any): AppThunk<any>
  isAuthenticated(): AppThunk<any>
}

export function authActions(repository: AuthRepository): AuthActionsCreators {
  function login(userData: any): AppThunk {
    return async (dispatch: any) => {
      try {
        dispatch(loading())

        const rep: any = await repository.logIn(userData)

        const { accessToken, user } = rep

        localStorage.setItem(TOKEN, accessToken)

        dispatch(loginSuccess(user))
      } catch (error) {
        if (error instanceof ServerException) {
          dispatch(loginError(error.message))
        }
      }
    }
  }

  function isAuthenticated(): AppThunk {
    return async (dispatch: any) => {
      try {
        dispatch(loading())

        const result = await repository.isAuthentecated()

        const { token, user } = result

        localStorage.setItem(TOKEN, token)

        dispatch(loginSuccess(user))
      } catch (error) {
        dispatch(loginError(error.message))
      }
    }
  }

  function signUp(userData: any): AppThunk {
    return async (dispatch: any) => {
      try {
        dispatch(loading())

        const rep: any = await repository.signUp(userData)

        localStorage.setItem(TOKEN, rep.accessToken)

        dispatch(loginSuccess(rep.user))
      } catch (error) {
        if (error instanceof ServerException) {
          dispatch(loginError(error.message))
        }
      }
    }
  }

  return {
    login,
    signUp,
    isAuthenticated,
  }
}
