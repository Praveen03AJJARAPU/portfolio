import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpened: false,
}

const navSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        openNav(state) {
            state.isOpened = true;
        },
        closeNav(state) {
            state.isOpened = false;
        }
    }
})

export const { openNav, closeNav } = navSlice.actions;

const navReducer = navSlice.reducer;

export default navReducer;