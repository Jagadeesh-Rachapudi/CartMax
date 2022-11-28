import React from "react";
import { TbSofa, TbLamp2 } from "react-icons/tb";
import { GiTable } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { useRef } from "react";
import { useState, useEffect } from "react";

function FLamp() {
  const onClickHandler = () => {
    console.log("hello");
  };
  const [day, setDay] = useState(12);
  const [hrs, setHrs] = useState(36);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(3);
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
    <div className="FLamp-Body">
      <div className="FLamp-1">
        <div className="FLamp-Option1" onClick={onClickHandler}>
          <TbLamp2 className="FLamp-Icon" size={40} />
          <div className="FLamp-Option1-Text">
            <div className="FLamp-Option1-Text-title">LAMP</div>
            <div className="FLamp-Option1-Text-Count">9 Products</div>
          </div>
        </div>
        <div className="FLamp-Option1">
          <TbSofa className="FLamp-Icon" size={40} />
          <div className="FLamp-Option1-Text">
            <div className="FLamp-Option1-Text-title">SOFA</div>
            <div className="FLamp-Option1-Text-Count">9 Products</div>
          </div>
        </div>
        <div className="FLamp-Option1">
          <GiTable className="FLamp-Icon" size={40} />
          <div className="FLamp-Option1-Text">
            <div className="FLamp-Option1-Text-title">TABLE</div>
            <div className="FLamp-Option1-Text-Count">9 Products</div>
          </div>
        </div>
        <div className="FLamp-Option1">
          <BiBed className="FLamp-Icon" size={40} />
          <div className="FLamp-Option1-Text">
            <div className="FLamp-Option1-Text-title">BED</div>
            <div className="FLamp-Option1-Text-Count">9 Products</div>
          </div>
        </div>
      </div>
      <div className="FLamp-2">
        <div className="FLamp2-Container">
          <div className="FLamp-Intro">SPRING SALE 20% OFF</div>
          <div className="FLamp-Hedding">
            La Chaise Nouvelle <br /> Grande Aventure
          </div>
          <div className="FLamp-Content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </div>
          <div className="FLamp-Timmer">
            <div className="FLamp-Days-Container">
              <div className="FLamp-Days">{day}</div>
              <div className="FLamp-Days-Text">DAYS</div>
            </div>
            <div className="FLamp-Days-Container">
              <div className="FLamp-Days">{hrs}</div>
              <div className="FLamp-Days-Text">HOURS</div>
            </div>
            <div className="FLamp-Days-Container">
              <div className="FLamp-Days">{min}</div>
              <div className="FLamp-Days-Text">MINS</div>
            </div>
            <div className="FLamp-Days-Container">
              <div className="FLamp-Days">{sec}</div>
              <div className="FLamp-Days-Text">SECS</div>
            </div>
          </div>
          <div className="FLamp-Button-Container">
            <button className="FLamp-Button">Expore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FLamp;
