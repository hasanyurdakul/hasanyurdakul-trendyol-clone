import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
function BuyMorePayLessFlag() {
  return (
    <div className="bg-orange-100 flex p-1">
      <LocalOfferIcon className="text-orange-500 text-sm mr-1" />
      <h1 className="text-[0.65rem] font-semibold">Çok Al Az Öde</h1>
    </div>
  );
}

export default BuyMorePayLessFlag;
