import { AuthAction, AuthActionTypes } from "./actions"

export type AuthState = {
  loading?: boolean
  loggedIn?: boolean
  user?: any
  error?: string | null
}

const initialState: AuthState = {
  loading: true,
  loggedIn: false,
  user: null,
  error: null,
}

export function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loggedIn: false,
      }
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user,
      }
    case AuthActionTypes.LOGIN_ERROR:
      return {
        loading: false,
        loggedIn: false,
        user: null,
        error: action.error,
      }
    default:
      return state
  }
}
