import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants/constants';

function VideoBackground({movieID}) {
    console.log(movieID, "movieID VIDEO BACKGROUND")

    const getVideoInfo = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`, API_OPTIONS);
      const json = await data.json();
      console.log(json, "jsonjsonjson")
    };
    useEffect(() => {
      getVideoInfo();
    }, []);

  return (
    <div className='pt-60'>VideoBackground</div>
  )
}

export default VideoBackground