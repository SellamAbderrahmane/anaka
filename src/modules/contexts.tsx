import React, { useContext } from "react"
import { AuthActionsCreators } from "./auth/state"
import { IHomeActions } from "./home/state/actions"
import { IShopActions } from "./shop/state"

// auth page context
export const UserActionContext = React.createContext<any>({})
export const useUserAction = () => useContext<AuthActionsCreators>(UserActionContext)

// shop page context
export const Shopcontext = React.createContext<any>({})
export const useShop = () => useContext<IShopActions>(Shopcontext)

// home page context
export const Homecontext = React.createContext<any>({})
export const useHome = () => useContext<IHomeActions>(Homecontext)
