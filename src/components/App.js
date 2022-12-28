import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import HomePage from '../contexts/HomePage'
import MenuCreate from '../contexts/MenuCreate';
import OrderCreate from '../contexts/OrderCreate';
import OrderListItem from '../contexts/OrderListItem'



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/new',
    element: <MenuCreate />
  },
  {
    path: '/order/list/:id',
    element: <OrderListItem />
  },
  {
    path: '/order/create',
    element: <OrderCreate />
  }
]);



const AppProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppProvider
