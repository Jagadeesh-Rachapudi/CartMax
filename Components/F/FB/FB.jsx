import React from "react";
import FBItems1 from "../../../Utils/FB-Items-1/FBItems1";

function FB() {
  return (
    <div>
      <div className="FB-Intro">BROWSE OUR ITEMS</div>
      <div className="FB-Hedding">
        Ideal for Your Home <br /> 2022 Collection
      </div>
      <div className="FB-Container">
        <div className="FB-Hide1">
          <FBItems1 title="Small Table Decorations" />
        </div>
        <div className="FB-Hide2">
          <FBItems1 title="Garden Chair" />
        </div>
        <div className="FB-Hide3">
          <FBItems1 title="Garden Chair" />
        </div>
        <div className="FB-Hide4">
          <FBItems1 title="Small Table Decorations" />
        </div>
      </div>
    </div>
  );
}

export default FB;
