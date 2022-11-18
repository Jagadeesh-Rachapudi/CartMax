import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";

function FASum() {
  const [activeLink, setActiveLink] = useState("#latestProducts");
  return (
    <div className="FA-Sum-Body">
      <div className="FA-Sum-Intro">JACKET & COAST</div>
      <div className="FA-Sum-Hedding-Links-Continer">
        <div className="FA-Sum-Hedding">Summer Days Look</div>
        <div className="FA-Sum-Links">
          <div className="FA-Sum-Link">
            <a
              href="#latestProducts"
              onClick={() => {
                if (activeLink === "#latestProducts") setActiveLink("");
                else setActiveLink("#latestProducts");
              }}
              className={
                activeLink === "#latestProducts"
                  ? " FA-Sum-L  activeLink"
                  : " FA-Sum-L "
              }
            >
              LATEST PRODUCTS
            </a>
          </div>
          <div className="FA-Sum-Link">
            <a
              href="#bestSelling"
              onClick={() => {
                console.log(activeLink);
                if (activeLink === "#bestSelling") setActiveLink("");
                else setActiveLink("#bestSelling");
              }}
              className={
                activeLink === "#bestSelling"
                  ? " FA-Sum-L  activeLink"
                  : " FA-Sum-L "
              }
            >
              BEST SELLING
            </a>
          </div>
          <div className="FA-Sum-Link">
            <a
              href="#featuredProducts"
              onClick={() => {
                console.log(activeLink);
                if (activeLink === "#featuredProducts") setActiveLink("");
                else setActiveLink("#featuredProducts");
              }}
              className={
                activeLink === "#featuredProducts"
                  ? " FA-Sum-L  activeLink"
                  : " FA-Sum-L "
              }
            >
              FEATURED PRODUCTS
            </a>
          </div>
        </div>
      </div>
      <div className="FA-Sum-Row1">
        <div className="FA-Sum-Image1">
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
            <div className="FA-NA-Image-Title">Yellow Reserved Hoodie</div>
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
        <div className="FA-Sum-Image2">
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
            <div className="FA-NA-Image-Title">T-shirts Coupe Amincie</div>
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
        <div className="FA-Sum-Image3">
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
            <div className="FA-NA-Image-Title">Textured vegan leather</div>
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
        <div className="FA-Sum-Image4">
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
            <div className="FA-NA-Image-Title">
              Blazer Coupe Amincie
            </div>
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
      </div>
      <div className="FA-Sum-Row2">
        <div className="FA-Sum-Image1">
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
        <div className="FA-Sum-Image2">
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
            <div className="FA-NA-Image-Title">Textured vegan leather</div>
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
        <div className="FA-Sum-Image3">
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
            <div className="FA-NA-Image-Title">Stripe Panel Down-filled</div>
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
        <div className="FA-Sum-Image4">
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
            <div className="FA-NA-Image-Title">Conte of Florence Jarod</div>
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
      </div>
    </div>
  );
}

export default FASum;
