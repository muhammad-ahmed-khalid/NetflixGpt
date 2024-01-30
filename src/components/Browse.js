import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();

  
  // This will get Now Playing movies from the store
  const getNowPlayMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  if(!getNowPlayMovies) return

  const specficMovie = getNowPlayMovies[0];


  console.log(specficMovie, "specficMovie")
  return (
    <div>
      <Header />
      <MainContainer />
      {/* <p className="pt-60">Movie Name:  {specficMovie.original_title}</p> */}
    </div>
  );
};

export default Browse;
