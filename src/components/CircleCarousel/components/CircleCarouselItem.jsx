import React from "react";

function CircleCarouselItem({ image }) {
  return (
    <div className="flex flex-col justify-center items-center align-middle max-w-[68px]">
      <img
        src={image.source}
        alt="item"
        className="rounded-full w-[68px] bg-white object-cover border border-gray-200"
      />
      <p className="text-xs font-semibold text-center mt-2 leading-tight">
        {image.title}
      </p>
    </div>
  );
}

export default CircleCarouselItem;
