import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import StoreContextProvider from './Context/StoreContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:'/cart',
    element:<Cart></Cart>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
     <RouterProvider router={router}></RouterProvider>
    </StoreContextProvider>

  </React.StrictMode>,
)
