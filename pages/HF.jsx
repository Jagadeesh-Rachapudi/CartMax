import React from "react";
import Ads from "../Components/Ads/Ads";
import Behind from "../Components/Behind/Behind";
import Hedder from "../Components/Hedder/Hedder";

import NavBar from "../Components/NavBar/NavBar";
import TopRibbon from "../Components/TopRibbon/TopRibbon";

function HF() {
  return (
    <div>
      <TopRibbon />
      <NavBar />
      <Hedder />
      <Ads/>
      <Behind/>
    </div>
  );
}

export default HF;
