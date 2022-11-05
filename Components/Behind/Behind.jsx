import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Book_It_Now from "../../Public Components/Book_It_Now/Book_It_Now";
import { useState } from "react";

function Behind() {
  const [active, setActive] = useState("NewArriavals");
  return (
    <div className="BehindBody">
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="smallinto">JACKET & COAST</div>
            <div className="smallHedding">Behind the brand</div>
            <article className="smallbox"></article>
            <div className="smalldesc">
              Subscribe to our newsletter and be the first to receive the latest
              fashion news, promotions and more! Would you like to stop
              receiving our newsletter?
            </div>
            <Book_It_Now />
          </Col>
          <Col sm={12} md={8} lg={8} xl={8} xxl={8}>
            <div className="bigImage"></div>
            <div className="BigLinks">
              <div className="links">
                <a>New Arrival</a>
              </div>
              <div className="links">
                <a>New Arrival</a>
              </div>
              <div className="links">
                <a>New Arrival</a>
              </div>
              <div className="links">
                <a>New Arrival</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Behind;
