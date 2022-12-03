import React from "react";
import Week from "../../../Utils/Week/Week";

function SW() {
  return (
    <div className="SW-Body">
      <div className="tag">Hot Categories</div>
      <div className="title">Deals of the Week</div>
      <div className="Container">
        <Week />
        <Week />
      </div>  
      <div className="img-Container">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Fphoto_6073506265818051238_y.jpg?alt=media&token=f60a1eef-7c67-4dd1-a28d-8c6f0b0912e0"
          alt=""
          className="img"
        />
      </div>
    </div>
  );
}

export default SW;
