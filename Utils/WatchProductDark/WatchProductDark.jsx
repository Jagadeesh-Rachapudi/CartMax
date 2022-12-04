import React from "react";

function WatchProductDark(props) {
  return (
    <div className="WatchProductDark-Body">
      <div className="sale">Sale 30%</div>
      <img src={props.link} className="img" />
      <div className="watch-name">
        Black/Brown Suede Leather <br /> Berkeley 38
      </div>
      <div className="price">£177.63</div>
    </div>
  );
}

export default WatchProductDark;
