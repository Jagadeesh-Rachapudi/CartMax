import React from "react";
import FABelowHedder from "../Components/FA/FA-Below-Hedder/FABelowHedder";
import FACategory from "../Components/FA/FA-Category/FACategory";
import FAHedder from "../Components/FA/FA-Hedder/FAHedder";
import FANA from "../Components/FA/FA-NA/FANA";
import FANAVBAR from "../Components/FA/FA-NavBar/FANAVBAR";
import FASum from "../Components/FA/FA-Summer/FASum";
import FATopRibbon from "../Components/FA/FA-Top-Ribbon/FATopRibbon";

function FA() {
  return (
    <div>
      <FATopRibbon />
      <FANAVBAR />
      <FAHedder />
      <FABelowHedder />
      <FACategory />
      <FANA/>
      <FASum/>
    </div>

  );
}

export default FA;
