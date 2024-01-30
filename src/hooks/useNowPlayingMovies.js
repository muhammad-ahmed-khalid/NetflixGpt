import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URLS } from "../constants/constants";
import { addNowPlayingMovies } from "../utility/movieSlice";

const useNowPlayingMovies = () => {
    const nowPlayMovieDispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(API_URLS.nowPlaying, API_OPTIONS);
      const json = await data.json();
      nowPlayMovieDispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies


