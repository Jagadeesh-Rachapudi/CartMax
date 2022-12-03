import React from "react";
import { useState, useEffect } from "react";
function WT() {
  const [day, setDay] = useState(12);
  const [hrs, setHrs] = useState(36);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(30);
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
    <div className="WT-Body">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/Watch%2Fwatches%2FLayer%20569.png?alt=media&token=49d58d3e-309e-4a6e-90d9-ba6b197379f5"
        width={400}
        height={400}
        className="img"
      />
      <div>
        <div className="intro">DEAL OF THE WEEK</div>
        <div className="title">Gold Analog Watch</div>
        <div className="price">£177.63</div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur
          adipisicing
        </div>
        <div className="timer">
          <div className="FLamp-Days-Container">
            <div
              className="FLamp-Days"
              style={{ backgroundColor: "#191919", color: "white" }}
            >
              {day}
            </div>
            <div className="FLamp-Days-Text">DAYS</div>
          </div>
          <div className="FLamp-Days-Container">
            <div
              className="FLamp-Days"
              style={{ backgroundColor: "#191919", color: "white" }}
            >
              {hrs}
            </div>
            <div className="FLamp-Days-Text">HOURS</div>
          </div>
          <div className="FLamp-Days-Container">
            <div
              className="FLamp-Days"
              style={{ backgroundColor: "#191919", color: "white" }}
            >
              {min}
            </div>
            <div className="FLamp-Days-Text">MINS</div>
          </div>
          <div className="FLamp-Days-Container">
            <div
              className="FLamp-Days"
              style={{ backgroundColor: "#191919", color: "white" }}
            >
              {sec}
            </div>
            <div className="FLamp-Days-Text">SECS</div>
          </div>
        </div>
        <button className="Button">SHOP NOW</button>
      </div>
    </div>
  );
}

export default WT;
