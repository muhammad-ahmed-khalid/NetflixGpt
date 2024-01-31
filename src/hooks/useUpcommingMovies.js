import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URLS } from "../constants/constants";
import { addUpcommingMovies } from "../utility/movieSlice";

const useUpcommingMovies = () => {
    const dispatch = useDispatch();
    const getUpcommingMovies = async () => {
      const data = await fetch(API_URLS.upcomming, API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcommingMovies(json.results));
    };
    useEffect(() => {
      getUpcommingMovies();
    }, []);
}

export default useUpcommingMovies


