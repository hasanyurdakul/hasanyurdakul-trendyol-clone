import React from "react";

function CallToActionItem({ item }) {
  return (
    <div
      className={`flex justify-center items-center p-2 w-96 py-4 rounded-xl ${item.bgColor}`}
    >
      <h1 className={`font-bold text-xl text-center ${item.textColor}`}>
        {item.text}
      </h1>
    </div>
  );
}

export default CallToActionItem;
