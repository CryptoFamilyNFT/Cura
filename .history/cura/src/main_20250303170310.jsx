import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CuraThemeProvider from './theme/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CuraThemeProvider>
      <App />
    </CuraThemeProvider>
  </React.StrictMode>,
)
