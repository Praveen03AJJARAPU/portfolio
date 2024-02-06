import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpened: false,
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        openDev(state) {
            state.isOpened = true;
        },
        closeDev(state) {
            state.isOpened = false;
        }
    }
})

export const { openDev, closeDev } = headerSlice.actions;

const headerReducer = headerSlice.reducer;

export default headerReducer;