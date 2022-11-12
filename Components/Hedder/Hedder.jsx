import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Container, Row, Col } from "react-bootstrap";
import { BiPlay } from "react-icons/bi";
import Book_It_Now from "../../Public Components/Book_It_Now/Book_It_Now";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "red", display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Hedder() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="hedderupperbody">
      <div className="HedderBody">
        <Slider {...settings}>
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
                      celebrating A stand out shirt is a one-and-done autumn
                      look
                    </div>
                    <div className="HedderButtonsContainer">
                      <Book_It_Now content="Book It Now !" />
                      <div className="b2container">
                        <button className="Hedderb2">
                          <BiPlay />
                        </button>
                        <div className="HedderbuttonText">WATCH LOOKBOOK</div>
                      </div>
                    </div>
                    <article className="HedderOffer">
                      <article className="HedderOfferCircle" />
                      <div className="HedderOfferText">
                        <div className="OfferSmallText">
                          Free Shipping on Domestic
                        </div>
                        <div className="OfferBigText">Orders Over $150</div>
                      </div>
                    </article>
                  </div>
                </Col>
              </Row>
            </Container>
          </article>
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
                      celebrating A stand out shirt is a one-and-done autumn
                      look
                    </div>
                    <div className="HedderButtonsContainer">
                      <Book_It_Now content="Book It Now !" />
                      <div className="b2container">
                        <button className="Hedderb2">
                          <BiPlay />
                        </button>
                        <div className="HedderbuttonText">WATCH LOOKBOOK</div>
                      </div>
                    </div>
                    <article className="HedderOffer">
                      <article className="HedderOfferCircle" />
                      <div className="HedderOfferText">
                        <div className="OfferSmallText">
                          Free Shipping on Domestic
                        </div>
                        <div className="OfferBigText">Orders Over $150</div>
                      </div>
                    </article>
                  </div>
                </Col>
              </Row>
            </Container>
          </article>
        </Slider>
      </div>
    </div>
  );
}

export default Hedder;
