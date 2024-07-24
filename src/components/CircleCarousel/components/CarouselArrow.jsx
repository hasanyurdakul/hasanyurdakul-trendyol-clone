import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function CarouselArrow({ direction }) {
  return (
    <div className=" h-full flex justify-center items-center align-middle">
      <div>
        {direction === "right" ? (
          <ChevronRightIcon className="text-gray-300 p-2 rounded-full text-5xl cursor-pointer hover:text-black" />
        ) : (
          <ChevronLeftIcon className="text-gray-300 p-2 rounded-full text-5xl cursor-pointer hover:text-black" />
        )}
      </div>
    </div>
  );
}

export default CarouselArrow;
