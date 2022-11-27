import React from "react";
import video from "../assets/video.mp4";
const HeroSection = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full   bg-gray-900/30 "></div>
      <div className="absolute text-white p-4 top-0 w-full h-full flex flex-col justify-center text-center">
        <h1 className="capitalize ">travel whole world !!!</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
      </div>
    </div>
  );
};

export default HeroSection;
