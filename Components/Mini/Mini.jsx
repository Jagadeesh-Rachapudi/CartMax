import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
function Mini() {
  const [Count, SetCount] = useState(1);
  const handleDrecement = () => {
    SetCount(Count - 1);
    console.log(Count);
  };
  const handleIncrement = () => {
    SetCount(Count + 1);
    console.log(Count);
  };
  return (
    <div className="Mini-body">
      <Container className="Mini-Container">
        <Row>
          <Col sm={12} lg={6} xl={6} xxl={6}>
            <img src="https://picsum.photos/500/600" />
          </Col>
          <Col sm={12} lg={6} xl={6} xxl={6}>
            <div className="MiniIntro">JACKET & COAST</div>
            <div className="MiniHedding">Pleated Mini Bucket Bag </div>
            <div className="Prices">
              <div className="Originalprice">89.00$ </div>
              <div className="Discountprice">80.00$</div>
            </div>
            <div className="Mini-Content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </div>
            <Container className="Mini-Slider-Container">
              <Row>
                <Col sm={3} lg={3} xl={3} xxl={3} className="SlideImage">
                  <img src="https://picsum.photos/125/125" />
                </Col>
                <Col sm={3} lg={3} xl={3} xxl={3} className="SlideImage">
                  <img src="https://picsum.photos/125/125" />
                </Col>
                <Col sm={3} lg={3} xl={3} xxl={3} className="SlideImage">
                  <img src="https://picsum.photos/125/125" />
                </Col>
              </Row>
            </Container>
            <div className="Mini-All-Buttons">
              <div className="Mini-Buttons">
                <button className="Mini-Button-Add" onClick={handleIncrement}>
                  +
                </button>
                {Count}
                <button className="Mini-Button-Sub" onClick={handleDrecement}>
                  -
                </button>
              </div>
              <Button class="btn btn-danger Cart-Buttom">
                <BsHandbag />
                ADD TO CART
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mini;
