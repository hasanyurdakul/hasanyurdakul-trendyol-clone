import React from "react";
import popularLinkItemList from "./../../constants/popularLinkItemList";
import PopularLinkGridItem from "./components/PopularLinkGridItem";

function PopularLinksGrid() {
  return (
    <div className="sm:max-w-96 md:max-w-[1200px] mx-auto mt-3 rounded-xl py-8  px-4 ">
      <div className="grid grid-cols-2 gap-20">
        {popularLinkItemList.map((gridItem, key) => (
          <PopularLinkGridItem key={key} gridItem={gridItem} />
        ))}
      </div>
    </div>
  );
}

export default PopularLinksGrid;
