import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import circleCarouselItemList from "../../constants/circleCarouselItemList.js";
import CircleCarouselItem from "./components/CircleCarouselItem";
import CarouselArrow from "./components/CarouselArrow.jsx";

function CircleCarousel() {
  return (
    <div className="mt-8 sm:max-w-96 md:max-w-[1200px] mx-auto ">
      <div className="hidden md:flex ">
        <Carousel
          responsive
          show={9.1}
          slide={2}
          swiping={true}
          infinite={false}
          rightArrow={<CarouselArrow direction={"right"} />}
          leftArrow={<CarouselArrow direction={"left"} />}
        >
          {circleCarouselItemList.map((image) => (
            <CircleCarouselItem key={image.id} image={image} />
          ))}
        </Carousel>
      </div>
      <div className="md:hidden">
        <Carousel
          responsive
          show={5.1}
          slide={2}
          swiping={true}
          infinite={false}
          rightArrow={<CarouselArrow direction={"right"} />}
          leftArrow={<CarouselArrow direction={"left"} />}
        >
          {circleCarouselItemList.map((image) => (
            <CircleCarouselItem key={image.id} image={image} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CircleCarousel;
