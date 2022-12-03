import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Jsondata from "./slideShowData.json";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const settings = {
  slidesToShow: 1,
  infinite: true,
  dots: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  adaptiveHeight: true,

  prevArrow: <BsChevronRight />,
  nextArrow: <BsChevronLeft />,
};
const data = Jsondata;
const Slideshow = (props) => {
  {
    Object.values(data).map((image) =>
      !image.src ? console.log(image) : console.log("hi")
    );
  }
  return (
    <div className="slide-show">
      <Slider {...settings} autoplay={true}>
        {Object.values(props.data).map(
          (image, id) =>
            image.src && (
              <img
                key={id}
                src={image.src}
                alt={image.alt || "alt"}
                // layout="fill"
              />
            )
        )}
      </Slider>
    </div>
  );
};

export default Slideshow;
