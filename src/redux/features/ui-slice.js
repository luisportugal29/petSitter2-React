import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    value: {
        error: false,
        isLoading: false,
        showSideBar: false,
    }
};

const userInterface = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.value = {...state.value, error: action.payload};
        },
        setIsLoading: (state, action) => {
            state.value = {...state.value, isLoading: action.payload};
        },
        setShowSideBar: (state, action) => {
            state.value = {...state.value, showSideBar: action.payload};
        }
    }
});

export const { setError, setIsLoading, setShowSideBar } = userInterface.actions;

export default userInterface.reducer;