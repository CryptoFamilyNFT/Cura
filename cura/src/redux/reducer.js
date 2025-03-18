import { combineReducers } from 'react-redux';
import { SIGNIN, SIGNUP } from './action';

const initUserState = {
    user: null
}

const usersReducer = (state = initUserState, action) => {
    switch (action.type) {
        case SIGNIN: 
        return {
            ...state,
            users: [...state.user, action.payload],
        };
        case SIGNUP: 
        return {
            ...state,
            users: state.users.filter((x) => x.id === action.payload)
        }
    }
}

export const rootReducer = combineReducers({
    users: usersReducer
});