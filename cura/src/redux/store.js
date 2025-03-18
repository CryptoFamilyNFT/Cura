/* eslint-disable no-unused-vars */
import {  applyMiddleware, configureStore} from "@reduxjs/toolkit";
import postsReducer, { rootReducer } from './reducer'

import { composeWithDevTools } from "redux-devtools-extension";
import  thunkMiddleware  from "redux-thunk";
const composedEnhancer =composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore({
        reducer: rootReducer,
        composedEnhancer
    }
);

export default store;