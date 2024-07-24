import React from "react";
import Pill from "./components/Pill";
import mightInterstYouPillItemList from "./../../constants/mightInterstYouPillItemList";

function MightInterstYouPills() {
  return (
    <div className=" sm:max-w-96 md:max-w-[1200px] mx-auto mt-3 px-4 md:px-0 bg-white ">
      <div className="md:py-8 md:px-4 p-1">
        <h2 className="text-md md:text-lg font-semibold text-gray-700 mb-2">
          Bunlar da İlginizi Çekebilir
        </h2>
        <div className="flex flex-wrap">
          {mightInterstYouPillItemList.map((item, key) => (
            <Pill key={key} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MightInterstYouPills;
