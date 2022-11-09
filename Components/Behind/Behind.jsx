import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Book_It_Now from "../../Public Components/Book_It_Now/Book_It_Now";
import { useState } from "react";

function Behind() {
  const [active, setActive] = useState("");
  return (
    <div className="BehindBody">
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="smallinto">JACKET & COAST</div>
            <div className="smallHedding">Behind the brand</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FRectangle%2024%20copy.png?alt=media&token=53b1f747-5e3a-4db4-9961-8a3ece972f36" />
            <div className="smalldesc">
              Subscribe to our newsletter and be the first to receive the latest
              fashion news, promotions and more! Would you like to stop
              receiving our newsletter?
            </div>
            <Book_It_Now />
          </Col>
          <Col sm={12} md={8} lg={8} xl={8} xxl={8}>
            <div className="bigImageContainer">
              <div className="ImageContainer">
                <img
                  className="BigImage"
                  src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FRectangle%2024.png?alt=media&token=12552a27-1e07-4619-b0c4-5ea12d3aed77"
                />
                <img
                  className="Experiance-tag"
                  src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2Fexperience-tag.png?alt=media&token=8809ef11-f35b-41de-ac5d-3eee16e681ec"
                />
              </div>
              <div className="BigLinks">
                <div className="link">
                  <a
                    className={
                      active === "#newArrivals"
                        ? " BigLink active"
                        : " BigLink "
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
                    className={
                      active === "#mens" ? " BigLink active" : " BigLink "
                    }
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
                    className={
                      active === "#kids" ? " BigLink active" : " BigLink "
                    }
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
                    className={
                      active === "#tops" ? " BigLink active" : " BigLink "
                    }
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Behind;
