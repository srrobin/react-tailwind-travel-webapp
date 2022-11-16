import React, { useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
const Carousel = (props) => {
  const [slide, setSlide] = useState(0);
  const length = props.carousel.length;
  console.log(length);
  const prveSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div className="max-w-[1240px] relative mx-auto px-4 py-16 flex items-center justify-center">
      <BsFillArrowLeftSquareFill
        onClick={prveSlide}
        className="absolute top-[50%] text-white text-3xl cursor-pointer left-8"
      />
      <BsFillArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-white text-3xl cursor-pointer right-8"
      />
      {props.carousel.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img src={item.img} alt="/" className="w-full    " />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
