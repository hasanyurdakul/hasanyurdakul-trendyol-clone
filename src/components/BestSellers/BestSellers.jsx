import React from "react";
import popularProductsItemList from "../../constants/popularProductsItemList";
import ProductCard from "../ProductCard/ProductCard";
import { ChevronRightOutlined } from "@mui/icons-material";
import { Carousel } from "@trendyol-js/react-carousel";
import CarouselArrow from "./../CircleCarousel/components/CarouselArrow";

function BestSellers() {
  return (
    <div className="sm:max-w-96 md:max-w-[1200px] mx-auto mt-3 px-4 md:px-0 ">
      <div className=" rounded-xl py-8 px-4 bg-gradient-to-b from-[#EBEBEB] to-white">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-2xl font-semibold mb-8">
            Çok Satan Ürünler
          </h1>
          <h1 className="text-xl md:text-2xl font-semibold mb-8">
            Tüm Ürünler <ChevronRightOutlined className="text-2xl" />
          </h1>
        </div>
        <div className="flex gap-5">
          <Carousel
            responsive
            show={4.8}
            slide={2}
            swiping={true}
            rightArrow={<CarouselArrow direction={"right"} />}
            leftArrow={<CarouselArrow direction={"left"} />}
            infinite={true}
          >
            {popularProductsItemList.map((item, key) => (
              <ProductCard item={item} key={key} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
