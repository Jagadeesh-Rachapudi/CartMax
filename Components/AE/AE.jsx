import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Book_It_Now from "../../Public Components/Book_It_Now/Book_It_Now";
function AE() {
  return (
    <div className="AE-Body">
      .
      <div className="AE-Playbutton">
        <BsFillPlayFill size={45} className="AE-Button" />
      </div>
      <div className="AE-Intro">AMAZON ESSENTIALS</div>
      <div className="AE-Hedding">Get -50% From Summer Collection</div>
      <div className="MS-Button-Container">
        <Book_It_Now content="EXPLORE NOW" />
      </div>
    </div>
  );
}

export default AE;
