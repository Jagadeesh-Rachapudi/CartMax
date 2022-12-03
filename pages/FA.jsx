import React from "react";
import FABelowHedder from "../Components/FA/FA-Below-Hedder/FABelowHedder";
import FAB from "../Components/FA/FA-Black/FAB";
import FACategory from "../Components/FA/FA-Category/FACategory";
import FAD from "../Components/FA/FA-D/FAD";
import FAFooter from "../Components/FA/FA-Footer/FAFooter";
import FAHedder from "../Components/FA/FA-Hedder/FAHedder";
import FANA from "../Components/FA/FA-NA/FANA";
import FANAVBAR from "../Components/FA/FA-NavBar/FANAVBAR";
import FANews from "../Components/FA/FA-News/FANews";
import FASum from "../Components/FA/FA-Summer/FASum";
import FATimer from "../Components/FA/FA-Timmer/FATimer";
import FATopRibbon from "../Components/FA/FA-Top-Ribbon/FATopRibbon";

function FA() {
  return (
    <div>
      <FATopRibbon />
      <FANAVBAR />
      <FAHedder />
      <FABelowHedder />
      <FACategory />
      <FANA />
      <FASum />
      <FAB />
      <FAD />
      <FATimer />
      <FANews />
      <FAFooter /> 
    </div>
  );
}

export default FA;
