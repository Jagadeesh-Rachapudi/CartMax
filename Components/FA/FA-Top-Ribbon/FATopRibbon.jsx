import React from "react";
import { AiTwotoneSound, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function FATopRibbon() {
  return (
    <div className="FA-TopRibbon-Body">
      <div className="FA-TopRibbon-Part1">
        <span className="FA-TopRibbon-Part1-Text">
          <AiTwotoneSound className="FA-TopRibbon-icon" />
          GET 20% SALE WITH COUPONE CODE CGBNJKI25
        </span>
      </div>
      <div className="FA-TopRibbon-Part2">
        <FaFacebook color="white" className="FA-TopRibbon-Icon1" />
        <FaInstagram color="white" className="FA-TopRibbon-Icon2" />
        <AiFillTwitterCircle color="white" className="FA-TopRibbon-Icon3" />
        <img src="https://countryflagsapi.com/png/GBR" width="15" height="15" />
        <div className="FA-TopRibbon-Text">ENG ^</div>
        <div className="FA-TopRibbon-USD">USD</div>
        <div className="FA-TopRibbon-Order-Tracking">Track My Order</div>
      </div>
    </div>
  );
}

export default FATopRibbon;
