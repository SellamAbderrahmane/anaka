import { AppThunk } from "../../../app/store"
import { ServerException } from "../../../data"
import AuthRepository from "../../../data/repositories/userRepository"
import { TOKEN } from "../../../utils"
import { loading, loginError, loginSuccess } from "./state"

export enum AuthActionTypes {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
  SIGNIN_REQUEST = "SIGNIN_REQUEST",
  SIGNIN_SUCCESS = "SIGNIN_SUCCESS",
  SIGNIN_ERROR = "SIGNIN_ERROR",
}

export interface AuthActionsCreators {
  login(username: string, password: string): void
  signIn(): void
  isAuthenticated(): void
}

export function authActions(repository: AuthRepository): AuthActionsCreators {
  function login(username: string, password: string): any {
    return async (dispatch: any) => {
      try {
        dispatch({
          type: AuthActionTypes.LOGIN_REQUEST,
        })
        const rep: any = await repository.logIn({ username, password })

        const { accessToken, user } = rep

        localStorage.setItem(TOKEN, accessToken)

        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          user,
        })
      } catch (error) {
        if (error instanceof ServerException) {
          dispatch({
            type: AuthActionTypes.LOGIN_ERROR,
            error: error.message,
          })
        }
      }
    }
  }

  function isAuthenticated(): AppThunk {
    return async (dispatch: any) => {
      try {
        dispatch(loading())

        const result = await repository.isAuthentecated()

        const { accessToken, user } = result

        localStorage.setItem(TOKEN, accessToken)

        dispatch(loginSuccess(user))
      } catch (error) {
        dispatch(loginError(error.message))
      }
    }
  }

  function signIn(): SignInAction {
    return {
      type: AuthActionTypes.SIGNIN_REQUEST,
    }
  }

  return {
    login,
    signIn,
    isAuthenticated,
  }
}

//auth actions
type LoginAction = {
  type: AuthActionTypes.LOGIN_REQUEST
}

type LoginSuccessAction = {
  type: AuthActionTypes.LOGIN_SUCCESS
  user: any
}

type LoginErrorAction = {
  type: AuthActionTypes.LOGIN_ERROR
  error: string
}

type SignInAction = {
  type: AuthActionTypes.SIGNIN_REQUEST
}

export type AuthAction = LoginAction | SignInAction | LoginSuccessAction | LoginErrorAction
