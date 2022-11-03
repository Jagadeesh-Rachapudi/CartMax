import React from "react";
import Hedder from "../Components/Hedder/Hedder";
import NavBar from "../Components/NavBar/NavBar";
import TopRibbon from "../Components/TopRibbon/TopRibbon";

function HF() {
  return (
    <div>
      <TopRibbon />
      <NavBar />
      <Hedder />
    </div>
  );
}

export default HF;
