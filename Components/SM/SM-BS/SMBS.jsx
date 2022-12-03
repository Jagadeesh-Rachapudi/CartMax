import React from "react";
import SO from "../../../Utils/SO/SO";

function SMBS() {
  return (
    <div className="SMBS-Body">
      <div className="container">
        <div className="tag">Hot Categories</div>
        <div className="title">Bestseller Products</div>
        <div className="Product-Container">
          <SO />
          <SO />
          <SO />
        </div>
        <div className="Product-Container">
          <SO />
          <SO />
          <SO />
        </div>
        <div className="Product-Container">
          <SO />
          <SO />
          <SO />
        </div>
        <div className="ads">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2F1.png?alt=media&token=582da6d8-98fb-4a95-9836-d704eb842b58"
            alt=""
            className="img"
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2F2.png?alt=media&token=728719ac-9a17-4246-ba13-eefd6a9f2de3"
            alt=""
            className="img"
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2F3.png?alt=media&token=7ef2abac-f13e-4095-9eb3-1830c528b5a8"
            alt=""
            className="img"
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2F4.png?alt=media&token=63278e85-01eb-4e79-8453-f091283142e1"
            alt=""
            className="img"
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2F5.png?alt=media&token=6f54972d-a3d6-44a7-983d-0d291cf97675"
            alt=""
            className="img"
          />
        </div>
        <div className="Rtitle">Recently Viewed Products</div>
        <hr />
        <div className="RContainer">
          <SO />
          <SO />
          <SO />
          <SO />
          <SO />
          <SO />
        </div>
      </div>
    </div>
  );
}

export default SMBS;
