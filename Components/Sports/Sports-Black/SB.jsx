import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
function SB() {
  return (
    <div className="SB-Body">
      <div className="SB-Play-Container">
        <AiOutlinePlayCircle color="white" size={100} />
      </div>
      <div className="SB-Hedding">Nike Air Saving 50% Max Zephyr</div>
      <div className="SB-Button-Container">
        <button className="SB-Button">EXPLORE NOW</button>
      </div>
    </div>
  );
}

export default SB;
