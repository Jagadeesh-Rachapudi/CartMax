import React from "react";
import Ads from "../Components/Ads/Ads";
import AE from "../Components/AE/AE";
import Behind from "../Components/Behind/Behind";
import Blog from "../Components/Blog/Blog";
import ES from "../Components/ES/ES";
import Footer from "../Components/Footer/Footer";
import Hedder from "../Components/Hedder/Hedder";
import Instagram from "../Components/Instagram/Instagram";
import Mini from "../Components/Mini/Mini";
import MS from "../Components/MS/MS";

import NavBar from "../Components/NavBar/NavBar";
import Sales from "../Components/Sales/Sales";
import SE from "../Components/SE/SE";
import TopRibbon from "../Components/TopRibbon/TopRibbon";

function HF() {
  return (
    <div>
      <TopRibbon />
      <NavBar />
      <Hedder />
      <Ads />
      <Behind />
      <Sales />
      <Mini />
      <MS />
      <AE />
      <SE />
      <ES />
      <Blog />
      <Instagram />
      <Footer />
    </div>
  );
}

export default HF;
