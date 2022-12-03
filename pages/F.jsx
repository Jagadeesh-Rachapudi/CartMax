import React from "react";
import FHedder from "../Components/F/F-Hedder/FHedder";
import FItems from "../Components/F/F-Items/FItems";
import FLamp from "../Components/F/F-Lamp/FLamp";
import FL from "../Components/F/F-Living/FL";
import FNAVBAR from "../Components/F/F-NAVBAR/FNAVBAR";
import FAds from "../Components/F/FAds/FAds";
import FB from "../Components/F/FB/FB";
import FFooter from "../Components/F/FFooter/FFooter";
import Fint from "../Components/F/FInt/Fint";
import FLatest from "../Components/F/FLatest/FLatest";
import FStar from "../Components/F/FStar/FStar";

function F() {
  return (
    <div>
      <FNAVBAR />
      <FHedder />
      <FL />
      <FItems />
      <FB />
      <FLamp />
      <FLatest />
      <FStar />
      <Fint />
      <FAds />
      <FFooter />
    </div>
  );
}

export default F;
