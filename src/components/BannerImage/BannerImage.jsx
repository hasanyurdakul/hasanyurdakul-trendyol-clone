import React from "react";

function BannerImage({ item }) {
  return (
    <div>
      <img src={item.image} alt="" className="w-96 rounded-xl" />
    </div>
  );
}

export default BannerImage;
