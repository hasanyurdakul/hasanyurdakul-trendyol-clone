import React from "react";
import bannerItemList from "../../constants/bannerItemList";
import BannerImage from "../BannerImage/BannerImage";

function FullBanner() {
  return (
    <div className="sm:max-w-96 md:max-w-[1200px] mx-auto  bg-[#FFFAF6] rounded-xl pb-8 px-4 ">
      <div className="grid grid-cols-3 gap-5">
        {bannerItemList.slice(3, 18).map((item, key) => (
          <BannerImage key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FullBanner;
