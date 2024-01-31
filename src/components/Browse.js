import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import VideoListWrapper from "./SuggestedVideoList/VideoListWrapper";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <VideoListWrapper />
    </div>
  );
};

export default Browse;
