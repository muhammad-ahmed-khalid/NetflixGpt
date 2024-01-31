import React from "react";
import VideoBackground from "./BgVideoComp/VideoBackground";
import { useSelector } from "react-redux";
import VideoInfo from "./BgVideoComp/VideoInfo";

function MainContainer() {
  // This will get Now Playing movies from the store
  const getNowPlayMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  if (!getNowPlayMovies) return;

  const specficMovie = getNowPlayMovies[0];

  return (
    <div className="h-full relative z-10">
      <VideoInfo data={specficMovie}/>
      <VideoBackground movieID={specficMovie?.id} />
    </div>
  );
}

export default MainContainer;
