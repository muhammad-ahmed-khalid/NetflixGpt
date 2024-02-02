import { createSlice } from "@reduxjs/toolkit";

const language = createSlice({
    name: "lng",
    initialState: {
        languageConfig : "en",
    },
    reducers: {
        selectedLangugage: (state, action) => {
           state.languageConfig = action.payload
        },
    }
})

export const { selectedLangugage} = language.actions

export default language.reducer