import { Navigate, Outlet, Route, Routes } from "react-router-dom"

import { configState } from "../app/config"
import { useAppDispatch, useAppSelector } from "../app/hooks"

import Home from "./home"
import ShopPage from "./shop"
import { Account } from "./user"
import Product from "./product/Product"
import Contact from "./contact/Content"
import Layout from "../ui/layout/Layout"
import Checkout from "./cart/checkout/Checkout"
import Auth, { AuthProvider } from "./auth"
import { Cart, Wishlist, Compare, CartProvider } from "./cart"
import PrivateRoute from "../ui/components/PrivateRoute"
import { currentCartState } from "./cart/state"
import { currentAuthState } from "./auth/state"
import { useEffect } from "react"
import { useUserAction } from "./contexts"

export * from "./auth"

function MainRoutes() {
  const appState = useAppSelector(configState)
  const cartState = useAppSelector(currentCartState)
  const userState = useAppSelector(currentAuthState)

  const auth = useUserAction()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(auth.isAuthenticated())
  }, [])

  return (
    <CartProvider>
      <Layout
        user={userState.user}
        currency={appState.currency}
        cartItems={cartState.cartItems.length}
        wishItems={cartState.wishItems.length}
        compareItems={cartState.compareItems.length}
      >
        <Outlet />
      </Layout>
    </CartProvider>
  )
}

function AuthRoutes() {
  return (
    <AuthProvider>
      <Routes>
        {/* <PrivateRoute element={MainRoutes} /> */}
        <Route path='*' element={<MainRoutes />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='cart' element={<Cart />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='compare' element={<Compare />} />
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='account' element={<Account />} />
          <Route path='product/:id' element={<Product />} />
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Route>
        <Route path='auth/:page' element={<Auth />} />
        {/* <Route path="*" element={<Navigate to="/home" />} /> */}
      </Routes>
    </AuthProvider>
  )
}

export default AuthRoutes
