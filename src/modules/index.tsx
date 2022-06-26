import { Navigate, Outlet, Route, Routes } from "react-router-dom"

import { configState } from "../app/config"
import { useAppSelector } from "../app/hooks"

import Home from "./home"
import ShopPage from "./shop"
import { Account } from "./user"
import { Product } from "./product"
import Contact from "./contact/Content"
import Layout from "../ui/layout/Layout"
import Checkout from "./checkout/Checkout"
import Auth, { AuthProvider } from "./auth"
import { Cart, Wishlist, Compare } from "./cart"
import PrivateRoute from "../ui/components/PrivateRoute"

export * from "./auth"

function MainRoutes() {
  const appState = useAppSelector(configState)

  return (
    <Layout cartItems={appState.cartItems} wishItems={appState.wishItems}>
      <Outlet />
    </Layout>
  )
}

function AuthRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="*" element={<PrivateRoute element={MainRoutes} />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="compare" element={<Compare />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Account />} />
          <Route path="product/:id" element={<Product />} />
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Route>
        <Route path="auth/:page" element={<Auth />} />
        {/* <Route path="*" element={<Navigate to="/home" />} /> */}
      </Routes>
    </AuthProvider>
  )
}

export default AuthRoutes
