import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URLS } from "../constants/constants";
import {  addPopularMovies } from "../utility/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(API_URLS.nowPlaying, API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default usePopularMovies


