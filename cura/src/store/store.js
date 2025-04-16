import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/User/userSlice'
import { userApi } from '../redux/_api/UserApiSlice' 

export default configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), // <- middleware per l'API 
})