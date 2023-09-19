"use client"
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth-slice';
import sittersReducer from './features/sitters-slice';
import userInterfaceReducer from './features/ui-slice'; 

export const store = configureStore({
    reducer: {
        auth: authReducer,
        sitter: sittersReducer,
        ui: userInterfaceReducer,
    }
});