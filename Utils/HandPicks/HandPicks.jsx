import React from "react";

function HandPicks(props) {
  return (
    <div className="HandPicks-Body">
      <div className="HandPicks-Image">
        <img src={props.link} />
      </div>
      <div className="Handpicks-Details">
        <div className="HandPicks-Hedding">
          <b>
            Apple 10.9-inch iPad Air <br /> Wi-Fi Cellular 64GB
          </b>
        </div>
        <div className="HandPicks-Price">$1199.00</div>
      </div>
    </div>
  );
}

export default HandPicks;
