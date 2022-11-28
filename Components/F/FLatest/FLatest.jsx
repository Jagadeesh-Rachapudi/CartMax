import React from "react";
import FBItems1 from "../../../Utils/FB-Items-1/FBItems1";

function FLatest() {
  return (
    <div className="FLatest-Body">
      <div className="FLatest-Intro">LATEST ARRIVALS AND</div>
      <div className="FLatest-Options-Hedding-Container">
        <div className="FLatest-Hedding">This year’s best selling items</div>
        <div className="FLatest-Options">
          <div className="FLatest-Option FLatest-Option-Active">
            Accessories
          </div>
          <div className="FLatest-Option">Bedroom</div>
          <div className="FLatest-Option">Dining</div>
          <div className="FLatest-Option">Kids</div>
          <div className="FLatest-Option">Lighting</div>
        </div>
      </div>
      <div className="FLatest-Items">
        <div className="FLatest-Item1 FLatest-Hide1">
          <FBItems1 title="Garden Chair" colors="true" />
        </div>
        <div className="FLatest-Item1 FLatest-Hide2">
          <FBItems1 title="Bathroom lighting" colors="true" />
        </div>
        <div className="FLatest-Item1 FLatest-Hide3">
          <FBItems1 title="Bathroom lighting" colors="true" />
        </div>
      </div>
      <div className="FLatest-Items">
        <div className="FLatest-Item1 FLatest-Hide1">
          <FBItems1 title="Bathroom lighting" colors="true" />
        </div>
        <div className="FLatest-Item1 FLatest-Hide2">
          <FBItems1 title="Bar Chair" colors="true" />
        </div>
        <div className="FLatest-Item1 FLatest-Hide3">
          <FBItems1 title="Lounge Chair" colors="true" />
        </div>
      </div>
    </div>
  );
}

export default FLatest;
