import { Rating } from "@mui/material";
import React from "react";

function StarRating({ rating, commentCount }) {
  return (
    <div className="flex mt-2 align-middle items-center">
      <h1 className="mr-2 text-sm">{rating}</h1>
      <Rating value={rating} precision={0.5} readOnly size="small" />
      <span className="text-gray-500 text-xs ml-2">({commentCount})</span>
    </div>
  );
}

export default StarRating;
