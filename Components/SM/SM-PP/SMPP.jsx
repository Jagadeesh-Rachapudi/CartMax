import React from "react";
import SM from "../../../Utils/SuperMarket/SM";

function SMPP() {
  return (
    <div className="SMPP-Body">
      <div className="top-conatiner">
        <div className="tag">Hot Categories</div>
        <div className="text-box">
          <div className="title">Popular Producs</div>
          <div className="options">
            <div className="option SMPP-active">Miks & Dairies</div>
            <div className="option">Coffes & Teas</div>
            <div className="option">Pet Food</div>
            <div className="option">Meats</div>
            <div className="option">Vegetables</div>
            <div className="option">Fruits</div>
          </div>
        </div>
        <div className="container">
          <SM />
          <SM />
          <SM />
          <SM />
        </div>
      </div>
    </div>
  );
}

export default SMPP;
