import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
function ElectronicCards(props) {
  return (
    <React.Fragment>
      <div className="Electonic-Cards-Body">
        <div className="Electronic-Cards-Contents">
          <div className="d-flex justify-content-center">
            <img src={props.source} className="Electronic-Cards-Image" />
          </div>
          <div className="Electronic-Cards-Title">
            VAIO Fit Laptop - Windows 8 <br /> SVF14322CXW
          </div>
          <div className="Electronic-Cards-Prices">
            <div className="Electronic-Cards-Price-Offer">$1199.00</div>
            <div className="Electronic-Cards-Prices-Original">$1999.00</div>
          </div>
          <div className="Electronic-Cards-Reviews">
            <div className="Electronic-Cards-Stars">
              <AiTwotoneStar color="gold" />
              <AiTwotoneStar color="gold" />
              <AiTwotoneStar color="gold" />
              <AiTwotoneStar color="gold" />
              <AiOutlineStar color="gold" />
            </div>
            <div className="Electronic-Card-Count">(3)</div>
          </div>
          <div className={props.bar === "true" ? "" : "Electronic-Card-Hide"}>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="170"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="sr-only"></span>
              </div>
            </div>
            <div className="Electric-Card-Sold-Count">Sold:89/150</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ElectronicCards;
