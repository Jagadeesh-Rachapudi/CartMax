import React from "react";
import FHedder from "../Components/F/F-Hedder/FHedder";
import FItems from "../Components/F/F-Items/FItems";
import FLamp from "../Components/F/F-Lamp/FLamp";
import FL from "../Components/F/F-Living/FL";
import FNAVBAR from "../Components/F/F-NAVBAR/FNAVBAR";
import FB from "../Components/F/FB/FB";

function F() {
  return (
    <div>
      <FNAVBAR />
      <FHedder />
      <FL />
      <FItems />
      <FB />
      <FLamp />
    </div>
  );
}

export default F;
