import { useDispatch } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"

import Authentication, { AuthProvider } from "./auth"
import PrivateRoute from "../ui/components/PrivateRoute"
import Layout from "../ui/layout/Layout"
import { useAppSelector } from "../app/hooks"
import { addToCart, configState } from "../app/config"

export * from "./auth"

function MainRoutes() {
  const dispatch = useDispatch()
  const appState = useAppSelector(configState)

  const addToCartClick = () => {
    dispatch(addToCart(1))
  }

  return (
    <Layout cartItems={appState.cartItems} wishItems={appState.wishItems}>
      <div className="p-2">
        <button className="btn btn-primary" onClick={addToCartClick}>add to cart</button>
      </div>
    </Layout>
  )
}

function AuthRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute element={MainRoutes} />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  )
}

export default AuthRoutes
