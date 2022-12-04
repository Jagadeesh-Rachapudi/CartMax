import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function ProductTimer(props) {
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
    <div className="product-timer">
      <Container>
        <Row className=" d-flex justify-content-around">
          <Col sm={12} md={6} className="content">
            <div
              className="heading"
              dangerouslySetInnerHTML={{
                __html: props.data.content,
              }}
            ></div>
            <div className="timer">
              <div className="days">
                <div>{day}</div>
                <p>DAYS</p>
              </div>
              <div className="hrs">
                <div>{hrs}</div>
                <p>HRS</p>
              </div>
              <div className="min">
                <div>{min}</div>
                <p>MIN</p>
              </div>
              <div className="sec">
                <div>{sec}</div>
                <p>SEC</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className="product">
            <div className="product-display">
              <h3>{props.data.product.title}</h3>
              <p>{props.data.product.saleText}</p>
              {props.data.product.productImage && (
                <img
                  src={props.data.product.productImage}
                  alt={"alt"}
                  // layout="fill"
                />
              )}
              <div className="details">
                <div className="color detail ">
                  <span>color:</span>
                  <span>
                    {console.log(props.data.product.productColors)}
                    {Object.values(props.data.product.productColors).map(
                      (c, id) => {
                        <p id={id}>{c.color}</p>;
                      }
                    )}
                  </span>
                </div>
                <div className="price detail">
                  {" "}
                  <span>price:</span> {props.data.product.productPrice}{" "}
                  {props.data.product.currencyCodeSysmbol}
                </div>
                <div className="size  detail">
                  <span>Size:</span>
                  {props.data.product.productSize}
                </div>
                <div className="add-to-cart detail">
                  <button>{props.data.product.addToCartText}</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductTimer;
