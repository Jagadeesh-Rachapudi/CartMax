import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Book_It_Now from "../../Public Components/Book_It_Now/Book_It_Now";

function MS() {
  return (
    <div className="Monthly-Sales_body">
      <div className="Monthly-Sales_Intro">JACKET & COAST</div>
      <div className="Title-buttons-Continer">
        <div className="MS-Hedding">Top Month Sellers</div>
        <div className="Button-Container">
          <div className="leftbutton1">
            <div className="Button-text1">New 2021</div>
          </div>
          <div className="leftbutton2">
            <div className="Button-text2">M2 Collection</div>
          </div>
        </div>
      </div>  
      <div className="MS-images">
        <div className="MS-image">
          <button className="MS-Sale-Button">Sale</button>
          <img src="https://picsum.photos/300/400" />
          <div className="MS-bottom-details">
            <div className="MS-Image-title">Travel Large Trifold Wallet</div>
            <div className="colors">
              <div className="MS-Colors1"></div>
              <div className="MS-Colors2"></div>
            </div>
          </div>
          <div className="prices">
            <div className="OriginalPrice">89.00$</div>
            <div className="OfferPrice">80.00$</div>
          </div>
        </div>
        <div className="MS-image">
          <button className="MS-Sale-Button">Sale</button>
          <img src="https://picsum.photos/300/400" />
          <div className="MS-bottom-details">
            <div className="MS-Image-title">Cross Body Mini Bag</div>
            <div className="colors">
              <div className="MS-Colors3"></div>
              <div className="MS-Colors4"></div>
            </div>
          </div>
          <div className="prices">
            <div className="OriginalPrice">89.00$</div>
            <div className="OfferPrice">80.00$</div>
          </div>
        </div>
        <div className="MS-image">
          <button className="MS-Sale-Button">Sale</button>
          <img src="https://picsum.photos/300/400" />
          <div className="MS-bottom-details">
            <div className="MS-Image-title">Bag with Flap</div>
            <div className="colors">
              <div className="MS-Colors5"></div>
              <div className="MS-Colors6"></div>
            </div>
          </div>
          <div className="prices">
            <div className="OriginalPrice">89.00$</div>
            <div className="OfferPrice">80.00$</div>
          </div>
        </div>
        <div className="MS-image">
          <button className="MS-Sale-Button">Sale</button>
          <img src="https://picsum.photos/300/400" />
          <div className="MS-bottom-details">
            <div className="MS-Image-title">Crew Neck T-shirt</div>
            <div className="colors">
              <div className="MS-Colors7"></div>
              <div className="MS-Colors8"></div>
            </div>
          </div>
          <div className="prices">
            <div className="OriginalPrice">89.00$</div>
            <div className="OfferPrice">80.00$</div>
          </div>
        </div>
        <div className="MS-image">
          <button className="MS-Sale-Button">Sale</button>
          <img src="https://picsum.photos/300/400" />
          <div className="MS-bottom-details">
            <div className="MS-Image-title">Collared Poplin Dress</div>
            <div className="colors">
              <div className="MS-Colors9"></div>
              <div className="MS-Colors10"></div>
            </div>
          </div>
          <div className="prices">
            <div className="OriginalPrice">89.00$</div>
            <div className="OfferPrice">80.00$</div>
          </div>
        </div>
        <div className="MS-image">
          <button className="MS-Sale-Button">Sale</button>
          <img src="https://picsum.photos/300/400" />
          <div className="MS-bottom-details">
            <div className="MS-Image-title">Polarised Sunglasses</div>
            <div className="colors">
              <div className="MS-Colors11"></div>
              <div className="MS-Colors12"></div>
            </div>
          </div>
          <div className="prices">
            <div className="OriginalPrice">89.00$</div>
            <div className="OfferPrice">80.00$</div>
          </div>
        </div>
      </div>
      <div className="MS-Button-Container"><Book_It_Now content='Book IT Now!' /></div>
      
    </div>
  );
}

export default MS;
