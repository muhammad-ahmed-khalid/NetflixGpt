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

  const specficMovie = getNowPlayMovies[1];

  console.log(specficMovie, "specficMovie");
  return (
    <div className="h-screen">
      <VideoInfo data={specficMovie}/>
      <VideoBackground movieID={specficMovie?.id} />
    </div>
  );
}

export default MainContainer;
