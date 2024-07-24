import React from "react";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";

function FreeShippingBadge() {
  return (
    <div className="flex max-w-16  ">
      <div className="flex justify-center items-center px-1 py-[2px] gap-1 bg-[#535353] rounded-[0.2rem]">
        <TakeoutDiningIcon className="text-white text-[1.1rem]" />
        <h1 className="text-[0.6rem] font-medium text-white leading-[.55rem]">
          KARGO BEDAVA
        </h1>
      </div>
    </div>
  );
}

export default FreeShippingBadge;
