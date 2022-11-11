import React from "react";
import { useState, useEffect } from "react";
import Book_It_Now from "../../Public Components/Book_It_Now/Book_It_Now";
function ES() {
  const [day, setDay] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(10);
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
            setHrs(59);
            if (day > 0) {
              setDay(day - 1);
            }
            if (day == 0) {
              setDay(9);
              setHrs(12);
              setMin(18);
              setSec(39);
            }
          }
        }
      }
    }, 1000);
  });
  return (
    <div className="ES-Body">
      <div className="ES-box1"></div>
      <div className="ES-box2"></div>
      <div className="ES-Vertical-Boxes">
        <div className="ES-box3"></div>
        <div className="ES-box4"></div>
        <div className="ES-box5"></div>
      </div>
      <div className="ES-Intro">JACKET & COAST</div>
      <div className="ES-Hedding">Enjoy this Spring Collection</div>
      <div className="ES-Content">
        Fashion trends are influenced by several factorsincluding celebrities,
        climate, creative explorations, political, economical, social.
      </div>
      <div className="ES-Timer">
        <div className="ES-days">
          <h1 className="ES-days-text-Num">{day}</h1>
          <h4 className="ES-days-text">DAYS</h4>
        </div>
        <div className="ES-days">
          <h1 className="ES-days-text-Num">{hrs}</h1>
          <h4 className="ES-days-text">HRS</h4>
        </div>
        <div className="ES-days">
          <h1 className="ES-days-text-Num">{min}</h1>
          <h4 className="ES-days-text">MIN</h4>
        </div>
        <div className="ES-days">
          <h1 className="ES-days-text-Num">{sec}</h1>
          <h4 className="ES-days-text">SEC</h4>
        </div>
      </div>
      <div className="ES-Button-Container">
        <Book_It_Now content="EXPLORE NOW" />
      </div>
    </div>
  );
}

export default ES;
