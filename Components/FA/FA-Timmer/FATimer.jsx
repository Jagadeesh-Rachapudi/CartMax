import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
function FATimer() {
  const [day, setDay] = useState(9);
  const [hrs, setHrs] = useState(12);
  const [min, setMin] = useState(18);
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
    <div className="FA-Timmer-Body">
      <div className="FA-Timmer-Part1"></div>
      <div className="FA-Timmer-Part2">
        <div className="FA-Timmer-Timmer">
          <BsPlayCircleFill
            size={100}
            color="white"
            className="FA-Timmer-Play"
          />
        </div>
        <div className="FA-Timmer-Hedding">Deal of The Day</div>
        <div className="FA-Timmer-Content">
          Way is there to get clothing you’re sure to love than by making it
        </div>
        <div className="FA-Timer">
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
        <div className="FA-Timmer-Button-Container">
          <button className="FA-Timmer-Button">Explore Deal</button>
        </div>
      </div>
    </div>
  );
}

export default FATimer;
