import React from "react";
import wallofTextItemList from "../../constants/wallofTextItemList";

function WallOfText() {
  return (
    <div className="sm:max-w-96 md:max-w-[1200px] mx-auto mt-3 py-8 px-4 ">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Tüm İhtiyaçlarınız İçin Tek İhtiyacınız Trendyol!
      </h2>
      {wallofTextItemList.map((item, key) => (
        <p key={key} className="text-sm my-1 text-gray-500 leading-5">
          {item.text}
        </p>
      ))}
    </div>
  );
}

export default WallOfText;
