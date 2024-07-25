import React from "react";
import navbarBottomItemList from "../../../constants/navbarBottomItemList";
import { Carousel } from "@trendyol-js/react-carousel";

function NavbarBottom() {
  return (
    <div className="sm:max-w-96 md:max-w-[1200px] ">
      <div className="md:hidden  ">
        <Carousel show={6.3} slide={2} swiping={true} infinite={false}>
          {navbarBottomItemList.map((item, index) => (
            <div key={index} className="flex mr-2">
              <div
                className="flex text-xs font-semibold hover:border-tOrange-400 border-b-2 border-white justify-center 
            items-start gap-1 cursor-pointer"
              >
                <p className="text-tGray-700  line-clamp-1 ">{item.name}</p>
              </div>
              {item.isNew && (
                <span
                  key={index}
                  className="text-white text-xs bg-red-600 hover:bg-tOrange-400 px-1  rounded-xl ml-2"
                >
                  Yeni
                </span>
              )}
            </div>
          ))}
        </Carousel>
      </div>
      <div className="hidden md:flex   justify-between  ">
        {navbarBottomItemList.map((item, index) => (
          <div className="flex mr-2 ">
            <div
              key={index}
              className="flex text-xs font-semibold hover:border-tOrange-400 border-b-2 border-white justify-center 
            items-center gap-1 cursor-pointer"
            >
              <p className="text-tGray-700 line-clamp-1 ">{item.name}</p>
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
