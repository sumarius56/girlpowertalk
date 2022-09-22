import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoNext = () => {
  return (
    <div id="hero" className="p-2 md:p-8">
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <div>
          <iframe
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/N8GWM-1xDKQ?autoplay=1&mute=1"
            title="The Story of Girl Power Talk"
            frameborder="0"
            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoNext;
