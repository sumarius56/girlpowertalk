import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoNext = () => {
  return (
    <div id="hero" className="p-2 md:p-8">
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <div>
          <ReactPlayer
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
            url="https://youtu.be/N8GWM-1xDKQ"
            playing={true}
            width="100%"
            height="90%"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoNext;
