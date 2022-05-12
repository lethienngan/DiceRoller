import { createSlice } from "@reduxjs/toolkit";

export const diceSlicer = createSlice({
    name: 'dice',
    initialState: [],
    reducers: {
        addDiceValue: (state, action) => {
            // mutation code || immer
            state.push(action.payload)
        },
        resetDiceHistory: (state, action) => {
            // mutation code || immer
            return []
        },
    }
})