import React from "react";
import { useState, useEffect } from "react";
function ET() {
  const [hrs, setHrs] = useState(21);
  const [min, setMin] = useState(50);
  const [sec, setSec] = useState(39);
  useEffect(() => {
    setTimeout(() => {
      setSec((sec) => sec - 1);
      if (sec == 0) {
        setSec(59);
        if (min > 0) {
          setMin(min - 1);
        }
        if (min == 0) {
          setMin(59);
          if (hrs > 0) {
            setHrs(hrs - 1);
          }
          if (hrs == 0) {
            setHrs(12);
            setMin(18);
            setSec(39);
          }
        }
      }
    }, 1000);
  });
  return (
    <div className="ET-Body">
      <div className="ET-Part1">
        <div className="ET-Boxes">
          <div className="ET-Box"></div>
          <div className="ET-Box"></div>
          <div className="ET-Box"></div>
          <div className="ET-Box"></div>
        </div>
      </div>
      <div className="ET-Part2">
        <div className="ET-Part2-Body">
          <div className="ET-Part2-Intro">THUNDER D9 DECOR</div>
          <div className="ET-Part2-Hedding">
            Gaming Streeing <br /> Wheel PC
          </div>
          <div className="ET-Part2-Price">
            <div className="ET-Part2-Offer-Price">$1199.00</div>
            <div className="ET-Part2-Original-Price">$1999.00</div>
          </div>
          <div className="ET-Part2-Tag">
            <b>Hurry Up! Offer ends in:</b>
          </div>
          <div className="ET-Timer">
            <div className="ET-Hrs">
              <h3 className="ET-Current-Hrs">{hrs}</h3>
              <div className="ET-hrs-Indicator">HOURS</div>
            </div>
            <div className="ET-Hrs">
              <h3 className="ET-Current-Hrs">{min}</h3>
              <div className="ET-hrs-Indicator">MINS</div>
            </div>
            <div className="ET-Hrs">
              <h3 className="ET-Current-Hrs">{sec}</h3>
              <div className="ET-hrs-Indicator">SECS</div>
            </div>
          </div>
          <div className="ET-Button-Container">
            <button className="ET-Button">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ET;
