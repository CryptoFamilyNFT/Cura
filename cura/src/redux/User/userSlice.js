import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null, // Memorizza i dati dell'utente
    isAuthenticated: false, // Stato di autenticazione
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
        getUser: (state) => {
            return state.user;
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, updateUser, getUser } = userSlice.actions

export default userSlice.reducer;