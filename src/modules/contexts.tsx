import React, { useContext } from "react"
import { AuthActionsCreators } from "./auth/state"
import { ICartActions } from "./cart/state"
import { IContactActions } from "./contact/state"
import { IHomeActions } from "./home/state/actions"
import { IProductActions } from "./product/state"
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

// contact page context
export const Contactcontext = React.createContext<any>({})
export const useContact = () => useContext<IContactActions>(Contactcontext)

// cart context
export const Cartcontext = React.createContext<any>({})
export const useCart = () => useContext<ICartActions>(Cartcontext)

// cart context
export const Productcontext = React.createContext<any>({})
export const useProduct = () => useContext<IProductActions>(Productcontext)