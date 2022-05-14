import { Navigate, Route, Routes } from "react-router-dom"

import Authentication, { AuthProvider } from "./auth"
import DefaultLayout from "../ui/layout/DefaultLayout"
import PrivateRoute from "../ui/components/PrivateRoute"

export * from "./auth"

function MainRoutes() {
  return (
    <DefaultLayout>
      <h1>hello</h1>
    </DefaultLayout>
  )
}

function AuthRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/" element={<PrivateRoute element={MainRoutes} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  )
}

export default AuthRoutes
