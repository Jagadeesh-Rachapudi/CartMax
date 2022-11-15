import React from "react";
import Book_It_Now from "../../../Utils/Book_It_Now/Book_It_Now";
import { BsPlayCircle } from "react-icons/bs";
function FAHedder() {
  return (
    <div className="FAHedder-Body">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/FA%2Fs2.png?alt=media&token=c9e2ce3e-3ebe-41d4-b262-2a7047bacfcf"
        alt="Hedder-Top-pciture"
        height="200"
        width="200"
      />
      <div className="FAHedder-Text-Image-Content">
        <div className="FAHedder-Text-Container">
          <div className="FAHedder-Intro">
            Online <br /> Exclusive
          </div>
          <div className="FAHedder-Content">
            New collection The Essentials with <br /> basic item necessary
          </div>
          <div className="FAHedder-Button-Container">
            <Book_It_Now content="Buy It Now" />
          </div>
        </div>
        <div className="FAHedder-Play-Bootom-pic">
          <div className="FAHedder-Play-Button-Container">
            <BsPlayCircle color="white" size={70} />
          </div>
          <img
            className="FAHedder-Bottom-Imge"
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/FA%2FRectangle%201%20copy.png?alt=media&token=b72b9210-b220-4e4d-a6f7-49fdb2cdff76"
            alt="Hedder-Bottom-pciture"
            height="200"
            width="200"
          />
        </div>
      </div>
    </div>
  );
}

export default FAHedder;
