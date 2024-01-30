import React from 'react'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

function MainContainer() {

  // This will get Now Playing movies from the store
  const getNowPlayMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  if(!getNowPlayMovies) return

  const specficMovie = getNowPlayMovies[0];


  console.log(specficMovie, "specficMovie")
  return (
    <div>
        <VideoBackground movieID={specficMovie?.id}/>
    </div>
  )
}

export default MainContainer