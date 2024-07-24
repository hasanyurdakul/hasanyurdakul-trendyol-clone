import React from "react";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

function FastShippingBadge() {
  return (
    <div className="flex max-w-16">
      <div className="flex justify-center items-center px-1 py-[2px] gap-1 bg-[#3EC461] rounded-[0.2rem]">
        <AirportShuttleIcon className="text-white text-[1.1rem]" />
        <h1 className="text-[0.6rem] font-medium text-white leading-[.55rem]">
          HIZLI TESLİMAT
        </h1>
      </div>
    </div>
  );
}

export default FastShippingBadge;
