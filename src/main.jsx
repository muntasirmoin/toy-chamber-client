import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './componentes/Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>

    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
