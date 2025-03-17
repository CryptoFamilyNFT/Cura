import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserProvider from './helper/UserProvider.jsx';
import Root from './Root.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <UserProvider>
    <Root/>
  </UserProvider>
) 