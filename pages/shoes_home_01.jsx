import React, { Fragment } from "react";
import Slideshow from "../Components/SlideShow/slideshow";
import Jsondata from "../Components/SlideShow/slideShowData.json";
function shoes_home_01() {
  return (
    <Fragment>
      <Slideshow data={Jsondata}></Slideshow>
    </Fragment>
  );
}

export default shoes_home_01;
