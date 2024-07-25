import React from "react";

function AdvantageBadge({ adventageRate }) {
  switch (adventageRate) {
    case 0:
      return <></>;
    case 1:
      return (
        <img
          src="/assets/images/badgePictures/advantageRate-1.webp"
          alt="advantage1"
          className="w-14"
        />
      );
    case 2:
      return (
        <img
          src="/assets/images/badgePictures/advantageRate-2.webp"
          alt="advantage2"
          className="w-14"
        />
      );
    case 3:
      return (
        <img
          src="/assets/images/badgePictures/advantageRate-3.webp"
          alt="advantage3"
          className="w-14"
        />
      );
    default:
      return null;
  }
}

export default AdvantageBadge;
