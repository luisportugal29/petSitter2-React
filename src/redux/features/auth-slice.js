import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios';

const API_URL = 'http://127.0.0.1:3200/api/auth/';

const initialState = {
    value: {
        isAuth: false,
        user: null,
    }
};

export const signUp = createAsyncThunk('/auth/signup', async(user) => {
    try {
        const {data : createdUser} = await axios.post(`${API_URL}/signup`, user );
        return createdUser;
    } catch (error) {
        throw error;
    }
});

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
    },
    extraReducers: (builder) => {
        builder
        .addCase(signUp.fulfilled, (state, action) => {
            state.value = { isAuth: true, user: action.payload};
        });
    }
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer; 
