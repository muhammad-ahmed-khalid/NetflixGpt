import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";

function VideoListWrapper() {
  const getNowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  const getPopularMovies = useSelector((state) => state.movies?.populargMovies);
  const getTopRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  const getUpcommingMovies = useSelector((state) => state.movies?.upcommingMovies);

  return (
    <>
    {getNowPlayingMovies && 
      <div className="bg-black">
      <div className="md:-mt-56 z-20 relative innerWrapperVidList">
      <VideoList title="Now Playing" data={getNowPlayingMovies} />
      <VideoList title="Popular Movies" data={getPopularMovies} />
      <VideoList title="Top Rated Movies" data={getTopRatedMovies} />
      <VideoList title="Upcomming Movies" data={getUpcommingMovies} />
      </div>
    </div>
    }
    </>
  );
}

export default VideoListWrapper;
