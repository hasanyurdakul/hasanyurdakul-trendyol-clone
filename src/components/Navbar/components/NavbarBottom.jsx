import React from "react";
import navbarBottomItemList from "../../../constants/navbarBottomItemList";

function NavbarBottom() {
  return (
    <div className="sm:max-w-96 md:max-w-[1200px] ">
      <div className="flex  flex-wrap  justify-center gap-x-10  ">
        {navbarBottomItemList.map((item, index) => (
          <div className="flex">
            <div
              key={index}
              className="flex text-xs font-semibold hover:border-tOrange-400 border-b-2 border-white justify-center 
            items-center gap-1 cursor-pointer"
            >
              <p className="text-tGray-700">{item.name}</p>
            </div>
            {item.isNew && (
              <span className="text-white text-xs bg-red-600 hover:bg-tOrange-400 px-1  rounded-xl ml-2">
                Yeni
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavbarBottom;
