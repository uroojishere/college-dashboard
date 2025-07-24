import React from "react";

const CollegeVideo = () => {
  return (
    <div className="w-[1040px] bg-white rounded-2xl border border-gray-200 p-8 shadow-xs">
      {/* Heading */}
      <p className="text-[18px] font-semibold text-black mb-6">
        Introduction Video
      </p>

      {/* Video */}
      <div className="w-[709px] h-[404px]">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default CollegeVideo;
