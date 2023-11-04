import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRouter from './Router/MyRouter.jsx'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={MyRouter}></RouterProvider>
      </HelmetProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
