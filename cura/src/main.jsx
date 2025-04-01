/* eslint-disable no-unused-vars */
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx';
import store from './store/store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Root />
    </Provider>
) 