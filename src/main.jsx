import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './common/Routing'
import './index.css'
import AuthProvider from './auth/AuthProvider'
import { GameProvider } from './game/provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <React.StrictMode>
      <AuthProvider>
      <Routing />
      </AuthProvider>
    </React.StrictMode>
)
