import React from "react";

function Pill({ title }) {
  return (
    <div className="flex m-1 cursor-pointer">
      <h1 className="bg-white border border-gray-200 py-3 px-6 rounded-full hover:border-orange-500 hover:text-orange-500">
        {title}
      </h1>
    </div>
  );
}

export default Pill;