import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utility/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, API_URLS } from "../constants/constants";

const useNowPlayingMovies = () => {
    const nowPlayMovieDispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(API_URLS.nowPlaying, API_OPTIONS);

      const data2 =  await fetch(`https://api.themoviedb.org/3/movie/${572802}/videos`, API_OPTIONS)
     
  
      const json = await data.json();
      const json2 = await data2.json();
      nowPlayMovieDispatch(addNowPlayingMovies(json.results));
      console.log(json2, "json2json2json2json2json2json2");
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies


