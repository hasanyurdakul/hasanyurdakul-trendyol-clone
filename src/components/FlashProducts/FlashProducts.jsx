import React from "react";
import popularProductsItemList from "../../constants/popularProductsItemList";
import ProductCard from "../ProductCard/ProductCard";
import { ChevronRightOutlined } from "@mui/icons-material";
import { Carousel } from "@trendyol-js/react-carousel";
import CarouselArrow from "./../CircleCarousel/components/CarouselArrow";

function FlashProducts() {
  return (
    <div className="sm:max-w-96 md:max-w-[1200px] mx-auto mt-3   px-4 md:px-0    ">
      <div className="bg-flashBackground rounded-xl py-8 px-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-row items-start">
            <img
              src="/assets/images/uiImages/flashIcon.svg"
              alt="flash"
              className="w-12"
            />
            <h1 className="text-xl md:text-2xl font-semibold ml-2 text-white">
              Flaş Ürünler
            </h1>
          </div>
          <h1 className="text-xl md:text-2xl font-semibold flex items-center text-white">
            Tüm Ürünler <ChevronRightOutlined className="text-2xl ml-2" />
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

export default FlashProducts;
