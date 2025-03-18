import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx';
import { Provider } from 'react-redux'
import store from './redux/store.js';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
) 