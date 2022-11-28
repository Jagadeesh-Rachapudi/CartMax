import React from "react";

function FBItems1(props) {
  return (
    <div>
      <div className="FBItems-Image-Conatiner">
        <img
          className="FBItems-Image"
          src="https://picsum.photos/250/300"
          alt=""
        />
        <div className="FBItems-Tag">BEDROOM</div>
      </div>
      <div className="FBItems-Price-Title">
        <div className="FBItems-Title">{props.title}</div>
        <div className="FBItems-Price">£100.00</div>
      </div>
    </div>
  );
}

export default FBItems1;
