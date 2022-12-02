import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function SM() {
  return (
    <div className="SM-Body">
      <div className="SM-tags">
        <div className="SM-tag">New</div>
        <div className="drop">-$129</div>
      </div>
      <img src="https://picsum.photos/252/284" className="img" />
      <div className="above-title">Hode Foods</div>
      <div className="SM-title">
        VAIO Fit Laptop - Windows 8 <br /> SVF14322CXW
      </div>
      <div className="Stars-Count">
        <div className="Stars">
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiOutlineStar color="#a0a0a0" />
        </div>
        <div className="Noofcount">(3)</div>
      </div>
      <hr/>
      <div className="prices">
        <div className="price1">$1199.00</div>
        <div className="price2">$1999.00</div>
        <div className="time">2-day Delivery</div>
      </div>
    </div>
  );
}

export default SM;
