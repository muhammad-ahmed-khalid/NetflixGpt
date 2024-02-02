import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import GptSearch from "./GptSearch/GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import VideoListWrapper from "./SuggestedVideoList/VideoListWrapper";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  const showGPT = useSelector((state) => state.gptSlice.isShowGPT);

  return (
    <div>
      <Header />
      {showGPT ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <VideoListWrapper />
        </>
      )}
    </div>
  );
};

export default Browse;
