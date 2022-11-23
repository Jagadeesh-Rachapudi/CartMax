import React from "react";
import EBSales from "../Components/E/E-BSales/EBSales";
import EHedder from "../Components/E/E-Hedder/EHedder";
import ENavBar from "../Components/E/E-Navbar/ENavBar";
import ET from "../Components/E/E-Timmer/ET";
import ETopRibbon from "../Components/E/E-TopRibbon/ETopRibbon";
import EFooter from "../Components/E/EFooter/EFooter";
import EHP from "../Components/E/EHP/EHP";
import EL from "../Components/E/EL/EL";
import Eoff from "../Components/E/EOFF/Eoff";

function E() {
  return (
    <div>
      <ETopRibbon />
      <ENavBar />
      <EHedder />
      <EBSales />
      <ET />
      <EL />
      <Eoff />
      <EHP />
      <EFooter />
    </div>
  );
}

export default E;
