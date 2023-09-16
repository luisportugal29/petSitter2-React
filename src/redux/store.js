"use client"
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth-slice';
import sittersReduce from './features/sitters-slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        sitter: sittersReduce,
    }
});