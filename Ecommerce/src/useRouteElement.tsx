import RegisterLayout from './layout/RegisterLayout/RegisterLayout'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import React from 'react'
import { useRoutes } from 'react-router-dom'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <RegisterLayout>
          <ProductList />
        </RegisterLayout>
      )
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
