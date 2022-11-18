import React from "react";
import { BsPlayCircle } from "react-icons/bs";

function FAB() {
  return (
    <div className="FA-B-Body">
      <div className="FA-B-Part1">
        .
        <div className="FA-B-Play-Container">
          <BsPlayCircle size={100} color={"white"} />
        </div>
        <div className="FA-B-Hedding">
          Add Video Slider in <br /> Your Store
        </div>
      </div>
      <div className="FA-B-Logos-BG">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/FA%2FFA-B.png?alt=media&token=91c3c4be-9b46-4d0a-9be6-eb41532a682f"
          className="insta-last-adds"
        />
      </div>
    </div>
  );
}

export default FAB;
