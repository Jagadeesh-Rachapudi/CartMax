import React from "react";
import S2 from "../Components/Sports/Sport-2/S2";
import SAds from "../Components/Sports/Sports-Ads/SAds";
import SB from "../Components/Sports/Sports-Black/SB";
import SF from "../Components/Sports/Sports-Footer/SF";
import SNav from "../Components/Sports/Sports-Nav/SNav";
import SP from "../Components/Sports/Sports-Products/SP";
import SY from "../Components/Sports/Sports-You/SY";

function Sports() {
  return (
    <div>
      <SNav />
      <SAds />
      <SP />
      <SB />
      <SY />
      <S2 />
      <SF />
    </div>
  );
}

export default Sports;
