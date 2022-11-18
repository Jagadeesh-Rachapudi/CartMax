import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
function FAD() {
  return (
    <div className="FA-D-Body">
      <div className="FA-D-Part1">
        <img class="FA-D-Image1" src="https://picsum.photos/300/500" />
        <img class="FA-D-Image2" src="https://picsum.photos/300/501" />
      </div>
      <div className="FA-D-Part2">
        <div className="FA-D-Intro">JACKET & COAST</div>
        <div className="FA-D-Hedding-Part1">Design Good </div>
        <div className="FA-D-Hedding-Part2">Every which said</div>
        <div className="FA-D-Quotes">
          <FaQuoteLeft size={30} />
        </div>
        <div className="FA-D-Comments">
          <img src="https://picsum.photos/70" />
          <div className="FA-D-Name-Stars">
            <div className="FA-D-Name">JOHN DOE</div>
            <AiTwotoneStar color="gold" />
            <AiTwotoneStar color="gold" />
            <AiTwotoneStar color="gold" />
            <AiTwotoneStar color="gold" />
          </div>
        </div>
        <div className="FA-D-Content">
          If you are looking to find a group of well-established and safe to
          ride with, you’ve found us. We were founded as a formal motorcycle{" "}
        </div>
      </div>
    </div>
  );
}

export default FAD;
