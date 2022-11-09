import React from "react";
import { ImSearch } from "react-icons/im";
import { SlHandbag } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
function Sales() {
  return (
    <div className="SalesBody">
      <div className="SlaesHedding">Best Sales</div>
      <div className="SalesProucts">
        <Container>
          <Row>
            <Col sm={6} lg={4} xl={4} xxl={3}>
              <article className="saleProduct">
                <ImSearch className="HoverIcon1" size={40} />
                <SlHandbag className="HoverIcon2" size={40} />
                <AiOutlineHeart className="HoverIcon3" size={40} />
                <button className="SalesButton">Sales</button>
                <img
                  className="Sales-Image"
                  src="https://picsum.photos/250/350"
                />
                <div className="SalesTitle">Crew Neck T-shirt</div>
                <div className="prices">
                  <div className="OriginalPrice">89.00$</div>
                  <div className="OfferPrice">80.00$</div>
                </div>
              </article>
            </Col>
            <Col sm={6} lg={4} xl={4} xxl={3}>
              <article className="saleProduct">
                <ImSearch className="HoverIcon1" size={40} />
                <SlHandbag className="HoverIcon2" size={40} />
                <AiOutlineHeart className="HoverIcon3" size={40} />
                <button className="SalesButton">Sales</button>
                <img
                  className="Sales-Image"
                  src="https://picsum.photos/250/350"
                />
                <div className="SalesTitle">Crew Neck T-shirt</div>
                <div className="prices">
                  <div className="OriginalPrice">89.00$</div>
                  <div className="OfferPrice">80.00$</div>
                </div>
              </article>
            </Col>
            <Col sm={6} lg={4} xl={4} xxl={3}>
              <article className="saleProduct">
                <ImSearch className="HoverIcon1" size={40} />
                <SlHandbag className="HoverIcon2" size={40} />
                <AiOutlineHeart className="HoverIcon3" size={40} />
                <button className="SalesButton">Sales</button>
                <img
                  className="Sales-Image"
                  src="https://picsum.photos/250/350"
                />
                <div className="SalesTitle">Crew Neck T-shirt</div>
                <div className="prices">
                  <div className="OriginalPrice">89.00$</div>
                  <div className="OfferPrice">80.00$</div>
                </div>
              </article>
            </Col>
            <Col sm={6} lg={4} xl={4} xxl={3}>
              <article className="saleProduct">
                <ImSearch className="HoverIcon1" size={40} />
                <SlHandbag className="HoverIcon2" size={40} />
                <AiOutlineHeart className="HoverIcon3" size={40} />
                <button className="SalesButton">Sales</button>
                <img
                  className="Sales-Image"
                  src="https://picsum.photos/250/350"
                />
                <div className="SalesTitle">Crew Neck T-shirt</div>
                <div className="prices">
                  <div className="OriginalPrice">89.00$</div>
                  <div className="OfferPrice">80.00$</div>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Sales;
