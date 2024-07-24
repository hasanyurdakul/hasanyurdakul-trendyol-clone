import React from "react";

function Award({ text }) {
  return (
    <div className="absolute bottom-0 flex justify-center gap-2 py-[2px] w-full text-center text-[0.7rem] text-white bg-gradient-to-r from-orange-500 to-yellow-300">
      <img
        src="/assets/images/badgePictures/award.svg"
        alt="award"
        className="w-2.5"
      />
      {text}
    </div>
  );
}

export default Award;
