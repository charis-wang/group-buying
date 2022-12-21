import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import HomePage from '../contexts/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const AppProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppProvider
