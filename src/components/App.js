import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import HomePage from '../contexts/HomePage'
import MenuCreate from '../contexts/MenuCreate';
import CreateMenu from '../contexts/MenuCreate'



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/new',
    element: <MenuCreate />
  }
]);



const AppProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppProvider
