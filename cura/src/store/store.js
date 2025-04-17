import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/User/userSlice'
import { userApi } from '../redux/_api/UserApiSlice' 

import storage from "redux-persist/lib/storage"; // usa localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), // <- middleware per l'API 
})

export default store;
export const persistor = persistStore(store, null, null);