import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Book_It_Now from "../../Public Components/Book_It_Now/Book_It_Now";
import { useState } from "react";

function Behind() {
  const [active, setActive] = useState("");
  return (
    <div>
      <div className="BehindBody">
        <div className="Behind-Part1">
          <div className="smallinto">JACKET & COAST</div>
          <div className="smallHedding">Behind the brand</div>
          <img src="https://picsum.photos/250/300" />
          <div className="smalldesc">
            Subscribe to our newsletter and be the first to receive the latest
            fashion news, promotions and more! Would you like to stop receiving
            our newsletter?
          </div>
          <div className="Behind-Book-Button">
            <Book_It_Now content="But It Now!" className="Behind-Book-Button" />
          </div>
        </div>
        <div className="Behind-Part2">
          <div className="ImageContainer">
            <img className="BigImage" src="https://picsum.photos/500/600" />
            {/* <img
                  className="Experiance-tag"
                  src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2Fexperience-tag.png?alt=media&token=8809ef11-f35b-41de-ac5d-3eee16e681ec"
                /> */}
          </div>
        </div>
        <div className="Behind-Part3">
          <div className="BigLinks">
            <div className="link">
              <a
                className={
                  active === "#newArrivals" ? " BigLink active" : " BigLink "
                }
                href="#newArrival"
                onClick={() => {
                  if (active === "#newArrivals") setActive("");
                  else setActive("#newArrivals");
                }}
              >
                New Arrival
              </a>
            </div>
            <div className="link">
              <a
                className={active === "#mens" ? " BigLink active" : " BigLink "}
                href="#mens"
                onClick={() => {
                  if (active === "#mens") setActive("");
                  else setActive("#mens");
                }}
              >
                Mens
              </a>
            </div>
            <div className="link">
              <a
                className={active === "#kids" ? " BigLink active" : " BigLink "}
                href="#kids"
                onClick={() => {
                  if (active === "#kids") setActive("");
                  else setActive("#kids");
                }}
              >
                Kids
              </a>
            </div>
            <div className="link">
              <a
                className={active === "#tops" ? " BigLink active" : " BigLink "}
                href="#tops"
                onClick={() => {
                  if (active === "#tops") setActive("");
                  else setActive("#tops");
                }}
              >
                Tops
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="BigLinks-Hide">
        <div className="link">
          <a
            className={
              active === "#newArrivals" ? " BigLink active" : " BigLink "
            }
            href="#newArrival"
            onClick={() => {
              if (active === "#newArrivals") setActive("");
              else setActive("#newArrivals");
            }}
          >
            New Arrival
          </a>
        </div>
        <div className="link">
          <a
            className={active === "#mens" ? " BigLink active" : " BigLink "}
            href="#mens"
            onClick={() => {
              if (active === "#mens") setActive("");
              else setActive("#mens");
            }}
          >
            Mens
          </a>
        </div>
        <div className="link">
          <a
            className={active === "#kids" ? " BigLink active" : " BigLink "}
            href="#kids"
            onClick={() => {
              if (active === "#kids") setActive("");
              else setActive("#kids");
            }}
          >
            Kids
          </a>
        </div>
        <div className="link">
          <a
            className={active === "#tops" ? " BigLink active" : " BigLink "}
            href="#tops"
            onClick={() => {
              if (active === "#tops") setActive("");
              else setActive("#tops");
            }}
          >
            Tops
          </a>
        </div>
      </div>
    </div>
  );
}

export default Behind;
