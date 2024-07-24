import React from "react";
import Award from "./components/Award";
import StarRating from "./components/StarRating";
import FastShippingBadge from "./components/FastShippingBadge";
import FreeShippingBadge from "./components/FreeShippingBadge";
import CouponOppurtunityFlag from "./components/CouponOppurtunityFlag";
import BuyMorePayLessFlag from "./components/BuyMorePayLessFlag";
import AdvantageBadge from "./components/AdvantageBadge";

function ProductCard({ item }) {
  return (
    <div>
      <div className="w-[210px] border border-gray-200 bg-white rounded-lg">
        <div className="">
          {/* Card Image */}
          <div className="relative">
            <img src={item.image} alt="product" className="rounded-lg" />
            <div
              name="badges"
              className="absolute top-2 left-2 flex flex-col gap-1"
            >
              {item.badges.fastShipping && <FastShippingBadge />}
              {item.badges.freeShipping && <FreeShippingBadge />}
              {item.badges.advantageRate > 0 ? (
                <AdvantageBadge adventageRate={item.badges.advantageRate} />
              ) : null}
            </div>
            {item.badges.awardTitle && <Award text={item.badges.awardTitle} />}
          </div>
          {/* Card Body */}
          <div className="p-2">
            <div className="line-clamp-2 leading-tight">
              <span className="font-bold mr-2 text-sm">{item.merchant}</span>
              <span className="text-gray-500 text-sm  ">{item.title}</span>
            </div>
            <StarRating
              rating={item.rating}
              commentCount={item.commentCount}
              readOnly
            />
            <h1 className="text-tOrange-400 font-semibold mt-8">
              {item.price} TL
            </h1>

            {/* Flags */}
            <div className="flex justify-between mt-2">
              {item.flags.couponOppurtunity && <CouponOppurtunityFlag />}
              {item.flags.buyMorePayLess && <BuyMorePayLessFlag />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
