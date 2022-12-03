import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Week() {
  return (
    <div className="Week-Body">
      <div className="p1">
        <div className="Week-tag">Hode Foods</div>
        <img src="https://picsum.photos/253/404" className="ing" />
      </div>
      <div className="p2">
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
        <div className="Week-title">Save $150 On Samsung </div>
        <div className="prices">
          <div className="price">$629.00</div>
          <div className="oPrice">$829.00</div>
        </div>
        <hr />
        <div className="Sub-Title">Hurry Up! Offer Ends in:</div>
        <div className="time">
          <div className="hrs-box">
            <div className="hrs">08</div>
            <div className="text">HOURS</div>
          </div>
          <div className="colon">:</div>
          <div className="hrs-box">
            <div className="hrs">19</div>
            <div className="text">MINS</div>
          </div>
          <div className="colon">:</div>
          <div className="hrs-box">
            <div className="hrs">54</div>
            <div className="text">SECS</div>
          </div>
        </div>
        <div className="Counts">
          <div className="Count1"> Available: 6</div>
          <div className="Count2">Already Sold:28</div>
        </div>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="170"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span class="sr-only"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week;
