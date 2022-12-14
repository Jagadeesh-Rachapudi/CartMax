import React from "react";
import { ImSearch } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import Book_It_Now from "../../../Utils/Book_It_Now/Book_It_Now";
function FANA() {
  return (
    <div className="FA-NA-Body">
      <div className="FA-NA-Intro">JACKET & COAST</div>
      <div className="FA-NA-Hedding">
        Cartmax <br /> New Arrivals
      </div>
      <div className="FA-NA-Images">
        <div className="FA-NA-Image FA-NA-Image-1">
          <div className="FA-NA-Part1">
            <button className="FA-NA-Percent">-45%</button>
            <button className="FA-NA-Hot">Hot</button>
            <div className="FA-NA-Search">
              <FiSearch size={15} className="FA-NA-Search-Icon" />
            </div>
            <div className="FA-NA-Love">
              <AiOutlineHeart size={15} className="FA-NA-Love-Icon" />
            </div>
            <div className="FA-NA-Bottom-Text">
              <SlHandbag /> Add To Cart
            </div>
            <img
              className="FA-NA-Sales-Img"
              src="https://picsum.photos/250/350"
            />
          </div>
          <div className="FA-NA-Part2">
            <div className="FA-NA-Image-Title">Soft Flap Crossbody</div>
            <div className="FA-NA-Prices">
              <div className="FA-NA-Original-Price">89.00$</div>
              <div className="FA-NA-Offer-Price">80.00$</div>
            </div>
            <div className="FA-NA-Colors">
              <div className="FA-NA-Color-1"></div>
              <div className="FA-NA-Color-2"></div>
            </div>
          </div>
        </div>
        <div className="FA-NA-Image FA-NA-Image-2">
          <div className="FA-NA-Part1">
            <button className="FA-NA-Percent">-45%</button>
            <button className="FA-NA-Hot">Hot</button>
            <div className="FA-NA-Search">
              <FiSearch size={15} className="FA-NA-Search-Icon" />
            </div>
            <div className="FA-NA-Love">
              <AiOutlineHeart size={15} className="FA-NA-Love-Icon" />
            </div>
            <div className="FA-NA-Bottom-Text">
              <SlHandbag /> Add To Cart
            </div>
            <img
              className="FA-NA-Sales-Img"
              src="https://picsum.photos/250/350"
            />
          </div>
          <div className="FA-NA-Part2 ">
            <div className="FA-NA-Image-Title">Polarised Sunglasses</div>
            <div className="FA-NA-Prices">
              <div className="FA-NA-Original-Price">89.00$</div>
              <div className="FA-NA-Offer-Price">80.00$</div>
            </div>
            <div className="FA-NA-Colors">
              <div className="FA-NA-Color-3"></div>
              <div className="FA-NA-Color-4"></div>
            </div>
          </div>
        </div>
        <div className="FA-NA-Image FA-NA-Image-3 ">
          <div className="FA-NA-Part1">
            <button className="FA-NA-Percent">-45%</button>
            <button className="FA-NA-Hot">Hot</button>
            <div className="FA-NA-Search">
              <FiSearch size={15} className="FA-NA-Search-Icon" />
            </div>
            <div className="FA-NA-Love">
              <AiOutlineHeart size={15} className="FA-NA-Love-Icon" />
            </div>
            <div className="FA-NA-Bottom-Text">
              <SlHandbag /> Add To Cart
            </div>
            <img
              className="FA-NA-Sales-Img"
              src="https://picsum.photos/250/350"
            />
          </div>
          <div className="FA-NA-Part2">
            <div className="FA-NA-Image-Title">Felted Wool Hat</div>
            <div className="FA-NA-Prices">
              <div className="FA-NA-Original-Price">89.00$</div>
              <div className="FA-NA-Offer-Price">80.00$</div>
            </div>
            <div className="FA-NA-Colors">
              <div className="FA-NA-Color-5"></div>
              <div className="FA-NA-Color-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="FA-NA-Black-Images">
        <div className="FA-NA-Black-Image FA-NA-Black1">
          <div className="FA-NA-Black-Image-Into">BAGS & BACKPACKS </div>
          <div className="FA-NA-Black-Image-Hedding">Suede Backpack</div>
          <div className="FA-NA-Black-Image-Percentage">60%</div>
          <div className="FA-NA-Black-Button-Container">
            <button className="FA-NA-Black-Button">See Collection</button>
          </div>
        </div>
        <div className="FA-NA-Black-Image FA-NA-Black2">
          <div className="FA-NA-Black-Image-Into">ACCESSORIES </div>
          <div className="FA-NA-Black-Image-Hedding">Tailor Gifts</div>
          <div className="FA-NA-Black-Image-Percentage">60%</div>
          <div className="FA-NA-Black-Button-Container">
            <button className="FA-NA-Black-Button">See Collection</button>
          </div>
        </div>
        <div className="FA-NA-Black-Image FA-NA-Black3">
          <div className="FA-NA-Black-Image-Into">Summer Sale </div>
          <div className="FA-NA-Black-Image-Percentage">-30%</div>
          <div className="FA-NA-Black-Image-Down-Text">Tailor Gifts</div>
          <div className="FA-NA-Black-Button-Container">
            <button className="FA-NA-Black-Button">See Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FANA;
