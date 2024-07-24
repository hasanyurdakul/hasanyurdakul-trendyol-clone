import React from "react";

function ChangeCountryAndTrustImages() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <button className="text-white font-bold text-xs border border-white rounded-lg max-w-28 p-1">
        Ülke Değiştir
      </button>
      <div className="flex items-center gap-5">
        <div className="bg-white w-28 p-2">
          <img src="/assets/images/uiImages/etbis.png" alt="etbis" />
        </div>
        <div className=" w-24 p-2">
          <img src="/assets/images/uiImages/trgo.png" alt="trgo" />
        </div>
      </div>
    </div>
  );
}

export default ChangeCountryAndTrustImages;
