import React, { Fragment } from "react";
import Slideshow from "../Components/Shoes/SlideShow/slideshow";
import SlideShowData from "../Components/Shoes/SlideShow/slideShowData.json";
import ClientsBannerData from "../Components/Shoes/ClientsBanner/clientsBannerData.json";
import ClientsBanner from "../Components/Shoes/ClientsBanner/clientsBanner";
import CategeoryListing from "../Components/Shoes/CategeoryListing/categeoryListing";
import CategeoryListingData from "../Components/Shoes/CategeoryListing/categeoryListingData.json";
import ProductTimer from "../Components/Shoes/ProductTimer/productTimer";
import ProductTimerData from "../Components/Shoes/ProductTimer/productTimerData.json";
import EBSales from "../Components/E/E-BSales/EBSales";
import S2 from "../Components/Sports/Sport-2/S2";
import SF from "../Components/Sports/Sports-Footer/SF";
import SNav from "../Components/Sports/Sports-Nav/SNav";
import ShoesNav from "../Components/Shoes/ShoesNav/ShoesNav";

function shoes_home_01() {
  return (
    <Fragment>
      <ShoesNav />
      <Slideshow data={SlideShowData}></Slideshow>
      <ClientsBanner data={ClientsBannerData} />
      <CategeoryListing data={CategeoryListingData} />
      <ProductTimer data={ProductTimerData} />
      <S2 />
      <SF />
    </Fragment>
  );
}

export default shoes_home_01;
