import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        isAuth: false,
        username: '',
        uid: ''
    }
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid
                }
            };
        }
    }
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer; 
