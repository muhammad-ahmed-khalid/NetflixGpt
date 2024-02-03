import React from "react";
import { useSelector } from "react-redux";
import VideoList from "../SuggestedVideoList/VideoList";
import VideoListCard from "../SuggestedVideoList/VideoListCard";

function GptSearchList() {
  const getSearchMoviesList = useSelector(
    (state) => state.movies?.searchMovies
  );
  if (!getSearchMoviesList) return null;
  console.log(getSearchMoviesList?.length, "getSearchMoviesList");
  return (
    <div className="flex bg-black py-10 px-10 mx-4 bg-opacity-80 rounded-2xl border-2 mt-10 borderRed">
      {getSearchMoviesList?.length == 0 ? (
        <p className="text-white text-3xl font-semibold text-center w-full">
          Nothing Found
        </p>
      ) : (
        <div className="overflow-x-auto flex">
          {getSearchMoviesList?.map((item) => (
            <VideoListCard key={item?.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GptSearchList;
