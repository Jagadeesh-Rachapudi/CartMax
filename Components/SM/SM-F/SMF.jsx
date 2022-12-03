import React from "react";
import SM from "../../../Utils/SuperMarket/SM";

function SMF() {
  return (
    <div className="SMF-Body">
      <div className="adds-and-content">
        <div className="p1">
          <div className="tag">Hot Categories</div>
          <div className="Title-Conatiner">
            <div className="Title">Featured Categories</div>
            <div className="View">View More</div>
          </div>
          <div className="Container">
            <SM />
            <SM />
            <SM />
          </div>
          <div className="Container">
            <SM />
            <SM />
            <SM />
          </div>
        </div>
        <div className="p2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2FV2-add.jpg?alt=media&token=3b5ccc6d-e028-4767-a8fa-66bedf62c3ef"
            className="img"
          />
        </div>
      </div>
      <div className="adds">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Fadd1.jpg?alt=media&token=36a525da-4783-4dd9-9dc8-87168e9cb988"
          className="add1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Fadd2.jpg?alt=media&token=abc6cfdc-17b1-4a22-a849-cde5b37cdd7e"
          className="add2"
        />
      </div>
    </div>
  );
}

export default SMF;
