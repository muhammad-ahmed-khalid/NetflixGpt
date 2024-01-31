import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../constants/constants";

function VideoBackground({ movieID }) {
  console.log(movieID, "movieID VIDEO BACKGROUND");

  const [vidData, setVidData] = useState(null)

  const getVideoInfo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterResult = json?.results?.filter(
      (result) => result?.type === "Trailer"
    )
    console.log(filterResult, "filterResultfilterResultfilterResultfilterResultfilterResult");
    setVidData(filterResult[0])
  };
  useEffect(() => {
    getVideoInfo();
  }, []);

  return (
    <div className="absolute w-full aspect-video top-0 left-0 bg-opacity-15">
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+vidData?.key+"?&autoplay=1&mute=1"}
        title="Netflix-GPT"
        autp
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
