import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies : null,
        populargMovies: null,
        topRatedMovies: null,
        upcommingMovies: null,
        searchMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
           state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.populargMovies = action.payload
         },
         addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
         },
         addUpcommingMovies: (state, action) => {
            state.upcommingMovies = action.payload
         },
         addSearchMovies: (state, action) => {
            state.searchMovies = action.payload
         },
        removeNowPlayingMovies: (state, action) => {
            return null
        }
    }
})

export const { addNowPlayingMovies, addSearchMovies , removeNowPlayingMovies , addPopularMovies, addTopRatedMovies, addUpcommingMovies} = movieSlice.actions

export default movieSlice.reducer