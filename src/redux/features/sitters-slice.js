import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://127.0.0.1:3200/api/sitters/';

const initialState = {
    value: {
        sitters: [],
        sitter: null,
    }
};

export const fetchSitters = createAsyncThunk('/sitters/findAll', async() => {
    try {
        const { data: sitters } = await axios.get(`${API_URL}/findAll`);
        return sitters;
    } catch (error) {
        throw error;
    }
});

export const fetchSitter = createAsyncThunk('/sitters/findSitter', async(id) => {
    try {
        const {data : sitter } = await axios.get(`${API_URL}/findsitter`, { params: { id } });
        return sitter;
    } catch(error) {
        throw error;
    }
});

export const filterSitters = createAsyncThunk('/sitters/filterBy', async(params) => {
    try {
        const { data : sitters } = await axios.get(`${API_URL}/filterBy`, { params });
        return sitters;
    } catch (error) {
        throw error;
    }
});

const sitters = createSlice({
    name: 'siter',
    initialState,
    reducers: {
        setSitters: (state, action) => {
            state.value.sitters = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSitters.fulfilled, changeState)
        .addCase(filterSitters.fulfilled, changeState)
        .addCase(fetchSitter.fulfilled, (state, action) =>  {
            state.value.sitter = action.payload;
        });
    }
});

export const { setSitters } = sitters.actions;

const changeState = (state, action) => {state.value.sitters = action.payload};

export default sitters.reducer;