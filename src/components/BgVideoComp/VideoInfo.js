import React from "react";

function VideoInfo({ data }) {
  const { title, overview, adult } = data || {};
  return (
    <div className="h-screen pl-4 w-full md:h-auto relative aspect-video md:pl-12 bg-gradient-to-r from-black flex flex-col justify-center">
      <h1 className="md:text-5xl text-white font-bold">{title}</h1>
      <div className="relative">
        <div className="md:w-4/12 w-full">
          <button className="text-white text-xs md:text-sm px-8 py-3 bg-slate-400 bg-opacity-25 rounded-lg mr-3">
            `-` Play
          </button>
          <button className="text-white text-xs md:text-sm px-8 py-3 bg-slate-400 bg-opacity-25 rounded-lg">
            + My List
          </button>
          <p className="text-white text-xs md:text-sm ">{overview}</p>
        </div>
        <p className="absolute -bottom-20 md:bottom-0 right-0 text-white px-4 py-2 bg-slate-400 bg-opacity-25 border-l-2 border-white">
          {adult ? "+ 18" : "Family"}
        </p>
      </div>
    </div>
  );
}

export default VideoInfo;
