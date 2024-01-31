import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URLS } from "../constants/constants";
import { addTopRatedMovies } from "../utility/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
      const data = await fetch(API_URLS.topRated, API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
      getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies


