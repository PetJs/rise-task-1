import React from "react";
import FlipText from "./AnimatedText";

interface WorkDisplayProps {
  img: string;
  text: string;
}

const WorkDisplay: React.FC<WorkDisplayProps> = ({ img, text }) => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Centered Animated Text */}
      <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 ">
        <FlipText
          text={text}
          className="text-3xl md:text-5xl  font-extrabold tracking-wide text-white "
          topTextClass="border-b-4 border-white"
          bottomTextClass=""
        />
      </div>
    </div>
  );
};

export default WorkDisplay;
