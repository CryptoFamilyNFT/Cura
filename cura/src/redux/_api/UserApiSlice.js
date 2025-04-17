import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { login, signUp } from '../User/userSlice';

// Mock DB locale
const mockUserDB = {
  'test@example.com': {
    id: 1,
    email: 'test@example.com',
    username: 'TestUser',
    token: 'mock-token-123',
  },
  'ginopaoli@gmail.com': {
    id: 2,
    email: "ginopaoli@gmail.com",
    username: 'GinoPaoli',
    token: 'mock-token-456',
  },
  'lucagiurato10@gmail.com': {
    id: 3,
    email: 'lucagiurato10@gmail.com',
    username: 'LucaGiurato',
    token: 'mock-token-789',
  }
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery(), // Niente fetch reali simulato
  endpoints: (build) => ({
    getUserByEmail: build.query({
      async queryFn(email) {
        const user = mockUserDB[email];
        if (user) {
          return { data: user };
        } else {
          return { error: { status: 404, data: 'User not found' } };
        }
      },
    }),

    login: build.mutation({
      async queryFn(credentials) {
        const user = mockUserDB[credentials.email];
        if (user) {
          return { data: user };
        } else {
          return { error: { status: 401, data: 'Invalid credentials' } };
        }
      },
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(login(data));
        } catch (err) {
          console.error('Login error:', err);
        }
      },
    }),

    signUp: build.mutation({
      async queryFn(userData) {
        if (mockUserDB[userData.email]) {
          return { error: { status: 409, data: 'User already exists' } };
        }

        const newUser = {
          id: Date.now(),
          ...userData,
          token: 'mock-token-' + Math.random().toString(36).substring(2),
        };

        mockUserDB[userData.email] = newUser;
        return { data: newUser };
      },
      async onQueryStarted(userData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(signUp(data));
        } catch (err) {
          console.error('Signup error:', err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetUserByEmailQuery,
} = userApi;
