import React from "react";
import FANAVBAR from "../Components/FA/FA-NavBar/FANAVBAR";
import FATopRibbon from "../Components/FA/FA-Top-Ribbon/FATopRibbon";
import F1 from "../Components/FaMini/F1/F1";
import F2 from "../Components/FaMini/F2/F2";
import FAFooter from "../Components/FA/FA-Footer/FAFooter";

function FaMini() {
  return (
    <div>
      <FATopRibbon />
      <FANAVBAR />
      <F1 />
      <F2 />
      <FAFooter />
    </div>
  );
}

export default FaMini;
