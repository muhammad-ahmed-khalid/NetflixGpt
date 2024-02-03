import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../constants/constants";

function VideoBackground({ movieID }) {
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
    setVidData(filterResult[0])
  };
  useEffect(() => {
    getVideoInfo();
  }, []);

  return (
    <div className="absolute w-full h-full md:aspect-video top-0 left-0 bg-opacity-15 -z-10">
      <iframe
      className="w-full h-full md:aspect-video"
        src={"https://www.youtube.com/embed/"+vidData?.key+"?&autoplay=1&mute=1&loop=1"}
        title="Netflix-GPT"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
