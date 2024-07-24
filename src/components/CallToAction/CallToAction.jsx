import React from "react";
import callToActionItemList from "./../../constants/callToActionItemList";
import CallToActionItem from "./components/CallToActionItem";

function CallToAction() {
  return (
    <div className="sm:max-w-96 md:max-w-[1200px] px-5 md:px-0 md:mx-auto mt-8 flex gap-6">
      {callToActionItemList.map((item) => {
        return <CallToActionItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default CallToAction;
