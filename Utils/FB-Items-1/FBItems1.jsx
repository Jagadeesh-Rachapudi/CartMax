import React from "react";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
function FBItems1(props) {
  return (
    <div>
      <div className="FBItems-Image-Conatiner">
        <img
          className="FBItems-Image"
          src="https://picsum.photos/250/300"
          alt=""
        />

        <span className="FBItems1-Cart">
          <div className="FBItems1-Cart-Text">
            <BsBag /> Add To Cart
          </div>
        </span>
        <span className="FBItems1-WhishList">
          <div className="FBItems1-Whish-Text">
            <AiOutlineHeart /> Whishlist
          </div>
        </span>
        <div className="FBItems-Tag">BEDROOM</div>
      </div>
      <div className="FBItems-Price-Title">
        <div className="FBItems-Titles-Colors">
          <div className="FBItems-Title">{props.title}</div>
          <div
            className={
              props.colors == "true" ? "FBItems-Colors " : "FBItems-Hide "
            }
          >
            <div className="FBItems-Color1" />
            <div className="FBItems-Color2" />
            <div className="FBItems-Color3" />
            <div className="FBItems-Color4" />
          </div>
        </div>
        <div className="FBItems-Price">£100.00</div>
      </div>
    </div>
  );
}

export default FBItems1;
