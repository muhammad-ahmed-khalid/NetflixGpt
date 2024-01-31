import React from "react";

function VideoInfo({ data }) {
  console.log(data, "datadatadatadata");
  const { title, overview, adult } = data || {};
  return (
    <div className="pt-60 relative aspect-video pl-12 bg-gradient-to-r from-black z-10">
      <h1 className="text-5xl text-white font-bold">{title}</h1>
      <div className="relative">
        <div className="w-8/12">
          <button className="text-white px-8 py-3 bg-slate-400 bg-opacity-25 rounded-lg mr-3">
            `-` Play
          </button>
          <button className="text-white px-8 py-3 bg-slate-400 bg-opacity-25 rounded-lg">
            + My List
          </button>
          <p className="text-white">{overview}</p>
        </div>
        <p className="absolute bottom-0 right-0 text-white px-4 py-2 bg-slate-400 bg-opacity-25 border-l-2 border-white">
          {adult ? "+ 18" : "Family"}
        </p>
      </div>
    </div>
  );
}

export default VideoInfo;
