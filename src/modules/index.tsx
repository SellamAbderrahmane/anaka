import { Navigate, Route, Routes } from "react-router-dom"

import Authentication, { AuthProvider } from "./auth"
import PrivateRoute from "../ui/components/PrivateRoute"
import Layout from "../ui/layout/Layout"

export * from "./auth"

function MainRoutes() {
  return (
    <Layout>
      <h1>hello</h1>
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
