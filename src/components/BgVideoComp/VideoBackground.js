import React, { useEffect } from "react";
import { API_OPTIONS } from "../../constants/constants";

function VideoBackground({ movieID }) {
  console.log(movieID, "movieID VIDEO BACKGROUND");

  const getVideoInfo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json?.results, "jsonjsonjson");
  };
  useEffect(() => {
    getVideoInfo();
  }, []);

  return (
    <div className="absolute w-full h-full bg-red-500 top-0 left-0 bg-opacity-15 -z-10">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/UGc5Tzz19UY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
