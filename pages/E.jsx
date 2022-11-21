import React from "react";
import EBSales from "../Components/E/E-BSales/EBSales";
import EHedder from "../Components/E/E-Hedder/EHedder";
import ENavBar from "../Components/E/E-Navbar/ENavBar";
import ET from "../Components/E/E-Timmer/ET";
import ETopRibbon from "../Components/E/E-TopRibbon/ETopRibbon";
import EL from "../Components/E/EL/EL";
import Eoff from "../Components/E/EOFF/Eoff";
import FAFooter from "../Components/FA/FA-Footer/FAFooter";

function E() {
  return (
    <div>
      <ETopRibbon />
      <ENavBar />
      <EHedder />
      <EBSales />
      <ET />
      <EL />
      {/* <Eoff/> */}
      <FAFooter />
    </div>
  );
}

export default E;
