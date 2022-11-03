import React from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BiPlay } from "react-icons/bi";

function Hedder() {
  return (
    <div className="HedderBody">
      <article>
        <Container fluid>
          <Row>
            <Col sm={12} lg={9} xl={9} xxl={9}>
              <div className="HedderContent">
                <div className="HedderNotice">BELIEVE WHAT YOU SEE</div>
                <div className="HedderMainText">Outside The City</div>
                <div className="HedderTextContainer">
                  <div className="HedderMainTextpart1">Mini</div>
                  <div className="HedderMainTextnext">bag Arrivals</div>
                </div>
                <div className="HedderSmallText">
                  A resolution to get behind Effortlessly refined styles for
                  celebrating A stand out shirt is a one-and-done autumn look
                </div>
                <div className="HedderButtonsContainer">
                  <Button class="btn btn-danger">
                    <div className="HedderRedButton">BUY IT NOW!</div>
                  </Button>
                  <div className="b2container">
                    <button className="Hedderb2">
                      <BiPlay />
                    </button>
                    <div className="HedderbuttonText">WATCH LOOKBOOK</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
    </div>
  );
}

export default Hedder;
