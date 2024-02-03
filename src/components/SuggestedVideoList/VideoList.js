import React from "react";
import VideoListCard from "./VideoListCard";

function VideoList({ title, data }) {
  const isDataIsArray = Array.isArray(data);
  return (
    <div className="mb-14">
      <h2 className="text-white text-3xl font-semibold mb-6">{title}</h2>
      <div className="w-full overflow-x-auto flex">
        <div className="flex w-screen">
          {isDataIsArray ? (
            data?.map((movie) => <VideoListCard key={movie.id} data={movie} />)
          ) : (
            <VideoListCard key={data?.id} data={data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoList;
