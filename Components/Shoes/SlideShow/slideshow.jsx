import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Jsondata from "./slideShowData.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const settings = {
  slidesToShow: 1,
  infinite: true,
  dots: false,
  speed: 500,

  slidesToScroll: 1,
  adaptiveHeight: true,

  prevArrow: <FaChevronLeft />,
  nextArrow: <FaChevronRight />,
};

const Slideshow = (props) => {
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
