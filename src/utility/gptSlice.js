import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        isShowGPT : false,
    },
    reducers: {
        toggleGPT : (state) => {
            state.isShowGPT = !state.isShowGPT
        },
    }
})

export const { toggleGPT }  = gptSlice.actions

export default gptSlice.reducer