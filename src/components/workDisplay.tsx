import React from "react";

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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[#fff] text-3xl md:text-5xl font-extrabold tracking-wide border-b-3 pb-1">
          {text}
        </h1>
      </div>

      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default WorkDisplay;
