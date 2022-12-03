import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function SO() {
  return (
    <div className="SO-Body">
      <img src="https://picsum.photos/186/162" className="img" />
      <div className="P2">
        <div className="SO-tag">HODE FOODS</div>
        <div className="SO-title">
          VAIO Fit Laptop <br /> SVF14322CXW
        </div>
        <div className="stars-Count">
          <div className="stars">
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiOutlineStar color="grey" />
          </div>
          <div className="Count">(3)</div>
        </div>
        <div className="price">$629.00</div>
      </div>
    </div>
  );
}

export default SO;
