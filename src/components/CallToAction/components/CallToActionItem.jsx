import React from "react";

function CallToActionItem({ item }) {
  return (
    <div className={`flex justify-center w-96 py-4 rounded-xl ${item.bgColor}`}>
      <h1 className={`font-bold text-xl te ${item.textColor}`}>{item.text}</h1>
    </div>
  );
}

export default CallToActionItem;
