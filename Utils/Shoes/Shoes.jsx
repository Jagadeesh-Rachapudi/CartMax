import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";

function Shoes() {
  return (
    <div className="Shoes-Body">
      <div className="Shoes-Above-Conatiner">
        <div className="Shoes-Tag-Percent">
          <div className="Shoes-Tag">Best Seller</div>
          <div className="Shoes-Percent">-44%</div>
        </div>
        <div className="Shoes-Stars">
          <AiFillStar color="gold" className="Shoes-Star" />
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <FaStarHalf color="gold" />
        </div>
      </div>
      <div className="Shoes-Image-Conatiner">
        <img src="https://picsum.photos/400/300" className="Shoes-Img" />
      </div>
      <div className="Shoes-Bleow-Container">
        <div className="Shoes-Hedding-Colors">
          <div className="Shoes-Hedding">Nike Air Force 1</div>
          <div className="Shoes-Colors">
            <div className="Shoes-Color1"></div>
            <div className="Shoes-Color2"></div>
            <div className="Shoes-Color3"></div>
            <div className="Shoes-Color4"></div>
          </div>
        </div>
        <div className="Shoes-Price">$72.30</div>
      </div>
    </div>
  );
}

export default Shoes;
