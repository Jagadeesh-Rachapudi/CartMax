import React from "react";
import Sa from "../Components/SM/SM-Adds/Sa";
import SMCat from "../Components/SM/SM-Cat/SMCat";
import SMF from "../Components/SM/SM-F/SMF";
import SMHedder from "../Components/SM/SM-Hedder/SMHedder";
import SMNAv from "../Components/SM/SM-Nav/SMNAv";
import SMPP from "../Components/SM/SM-PP/SMPP";
import SMS from "../Components/SM/SMS/SMS";
import SW from "../Components/SM/SW/SW";

function SuperMarket() {
  return (
    <div>
      <SMNAv />
      <SMHedder />
      <SMCat />
      <SMPP />
      <SMF />
      <SMS />
      <Sa />
      <SW />
    </div>
  );
}

export default SuperMarket;
