import React from "react";
import SO from "../../../Utils/SO/SO";

function SMS() {
  return (
    <div className="SMS-body">
      <div className="tag">Hot Categories</div>
      <div className="Title">Hurry up! Special offers.</div>
      <div className="Options">
        <div className="Option1 active1">Cameras</div>
        <div className="Option1">Audio</div>
        <div className="Option1">GPS & Navigation</div>
        <div className="Option1">TV & Video</div>
        <div className="Option1">Cell phones</div>
        <div className="Option1">Computers</div>
        <div className="Option1">Accesories</div>
      </div>
      <div className="Container">
        <SO />
        <SO />
        <SO />
      </div>
      <div className="Container">
        <SO />
        <SO />
        <SO />
      </div>
      <div className="Container">
        <SO />
        <SO />
        <SO />
      </div>
    </div>
  );
}

export default SMS;
