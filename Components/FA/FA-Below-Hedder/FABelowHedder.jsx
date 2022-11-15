import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import Book_It_Now from "../../../Utils/Book_It_Now/Book_It_Now";

function FABelowHedder() {
  return (
    <div>
      <div className="FA-Below-TopRow">
        <div className="FA-Below-TopRow-col1 set1">
          <img
            src="https://picsum.photos/75"
            alt="pic1"
            className="FA-Below-TopRow-Pic"
          />
          <div className="FA-Below-TopRow-Text">
            <div className="FA-Below-TopRow-text1">
              Made from Recycled <br /> Discarded Textiles
            </div>
            <div className="FA-Below-TopRow-text2">
              From all Orders Over $100
            </div>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/FA%2FDown-Arrow.png?alt=media&token=3dc66e5f-fa6c-4728-bcc5-77c29a6f8840"
            alt="Down-Arrow"
            height="40"
            width="100"
            className="Down-Arrow"
          />
        </div>
        <div className="FA-Below-TopRow-col1 set2 ">
          <img
            src="https://picsum.photos/75"
            alt="pic1"
            className="FA-Below-TopRow-Pic"
          />
          <div className="FA-Below-TopRow-Text">
            <div className="FA-Below-TopRow-text1">
              Made from Recycled <br /> Discarded Textiles
            </div>
            <div className="FA-Below-TopRow-text2">
              From all Orders Over $100
            </div>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/FA%2FDown-Arrow.png?alt=media&token=3dc66e5f-fa6c-4728-bcc5-77c29a6f8840"
            alt="Down-Arrow"
            height="40"
            width="100"
            className="Down-Arrow"
          />
        </div>
        <div className="FA-Below-TopRow-col1 set3">
          <img
            src="https://picsum.photos/75"
            alt="pic1"
            className="FA-Below-TopRow-Pic"
          />
          <div className="FA-Below-TopRow-Text">
            <div className="FA-Below-TopRow-text1">
              Made from Recycled <br /> Discarded Textiles
            </div>
            <div className="FA-Below-TopRow-text2">
              From all Orders Over $100
            </div>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/FA%2FDown-Arrow.png?alt=media&token=3dc66e5f-fa6c-4728-bcc5-77c29a6f8840"
            alt="Down-Arrow"
            height="40"
            width="100"
            className="Down-Arrow"
          />
        </div>
      </div>
      {/* Imported from Mini */}
      <div className="FA-Below-Hedder-Part2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/FA%2FBag.png?alt=media&token=bbf0c77b-4138-4389-bba1-20373b23b6ad"
          alt="Shadow-Bag"
          height={400}
          width={400}
          className='FA-Below-Hedder-Bag'
        />
        <div className="FA-Below-Hedder-Bag-Text">
          <div className="FA-Part-2-Intro">Unique Clothes for Everyone!</div>
          <div className="FA-Part-2-Hedding">
            A Team of Designers <br /> That Make Dreams
          </div>
          <div className="FA-Below-Hedder-Small-Images">
            <img src="https://picsum.photos/90" alt="Small-Pic-1" />
            <img src="https://picsum.photos/90" alt="Small-Pic-2" />
            <img src="https://picsum.photos/90" alt="Small-Pic-3" />
          </div>
          <div className="FA-Below-Hedder-Bag-Content">
            Subscribe to our newsletter and be the first to receive the latest
            fashion news, promotions and more! Would you like to stop receiving
            our newsletter?
          </div>
          <div className="FA-Below-Hedder-Bag-Button-Container">
            <Book_It_Now content="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FABelowHedder;
