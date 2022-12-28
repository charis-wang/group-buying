import React from 'react'
import ReactDOM from 'react-dom'

import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'

import AppProvider from "./components/App"

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)




root.render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
)

