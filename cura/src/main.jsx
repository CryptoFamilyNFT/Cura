import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './helper/UserProvider.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <UserProvider>
    <App />
  </UserProvider>
)