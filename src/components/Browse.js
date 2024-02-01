import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import VideoListWrapper from "./SuggestedVideoList/VideoListWrapper";
import { useDispatch, useSelector } from "react-redux";
import { toggleGPT } from "../utility/gptSlice";
import GptSearch from "./GptSearch/GptSearch";

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
