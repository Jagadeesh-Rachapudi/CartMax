import React from "react";
import { SlCalender } from "react-icons/sl";
function FANews() {
  return (
    <div className="FA-News-Body">
      <div className="FA-News-Intro">JACKET & COAST</div>
      <div className="FA-News-Heddings">
        <div className="FA-News-Hedding1">LATEST</div>
        <div className="FA-News-Hedding2">NEWS</div>
      </div>
      <div className="FA-News-Articles">
        <div className="FA-News-Article1 FA-A1 ">
          <img
            src="https://picsum.photos/300/200"
            className="FA-News-Article1-Image"
          />
          <div className="FA-News-Article1-Part2">
            <div className="FA-News-Part1">
              <img
                src="https://picsum.photos/25"
                className="FA-News-Person-Pic"
              />
              <div className="FA-News-Role">BY NAME -</div>
              <SlCalender className="FA-News-Calender" />
              <div className="FA-News-Date">AUGUST 7, 2020</div>
            </div>
            <div className="FA-News-Part2">
              Between the Devil and the Deep <br /> Drew Sea
            </div>
          </div>
        </div>
        <div className="FA-News-Article1 FA-A2">
          <img
            src="https://picsum.photos/300/200"
            className="FA-News-Article1-Image"
          />
          <div className="FA-News-Article1-Part2">
            <div className="FA-News-Part1">
              <img
                src="https://picsum.photos/25"
                className="FA-News-Person-Pic"
              />
              <div className="FA-News-Role">BY NAME -</div>
              <SlCalender className="FA-News-Calender" />
              <div className="FA-News-Date">AUGUST 7, 2020</div>
            </div>
            <div className="FA-News-Part2">
              Between the Devil and the Deep <br /> Drew Sea
            </div>
          </div>
        </div>
        <div className="FA-News-Article1 FA-A3">
          <img
            src="https://picsum.photos/300/200"
            className="FA-News-Article1-Image"
          />
          <div className="FA-News-Article1-Part2">
            <div className="FA-News-Part1">
              <img
                src="https://picsum.photos/25"
                className="FA-News-Person-Pic"
              />
              <div className="FA-News-Role">BY NAME -</div>
              <SlCalender className="FA-News-Calender" />
              <div className="FA-News-Date">AUGUST 7, 2020</div>
            </div>
            <div className="FA-News-Part2">
              Between the Devil and the Deep <br /> Drew Sea
            </div>
          </div>
        </div>
      </div>
      <div className="FA-News-Client">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/FA%2FFA-News-Our%20Clients.png?alt=media&token=8f1c9182-7937-4e8d-b09c-935812cd9c7f"
          className="insta-last-adds"
        />
      </div>
    </div>
  );
}

export default FANews;
