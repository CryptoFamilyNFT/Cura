import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import DB from '../../entities/db.json'
// Define a service using a base URL and expected endpoints

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: DB }),
  endpoints: (build) => ({
    getUserByEmail: build.query({
      query: (email) => `users/${email}`,
    }),
    login: build.query({
        queryFn: (email) => `users/auth/${email}`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = userApi