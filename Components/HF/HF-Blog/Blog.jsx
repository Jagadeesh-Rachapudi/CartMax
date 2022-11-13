import React from "react";
import Book_It_Now from "../../../Utils/Book_It_Now/Book_It_Now";

function Blog() {
  return (
    <div className="Blog-Body">
      <div className="Blog-Intro">JACKET & COAST</div>
      <div className="Blog-Hedding">
        Get Cartmax now and set up your Store Today
      </div>
      <div className="Blog-Images">
        <div className="Blog-Image">
          <img src="https://picsum.photos/320/400" />
          <div className="Blog-Image-Details">
            <div className="Blog-circle"></div>
            <div className="Blod-Image-Name">Bahar Piltan | July 22, 2021</div>
          </div>
          <div className="Blog-Image-Content">
            <div className="Blog-Image-Hedding">
              Sustainable Clothing Brands
            </div>
            <div className="Blog-Image-Last-Content">
              Over the last few weeks, and as report previously in our first
              article{" "}
            </div>
          </div>
        </div>
        <div className="Blog-Image">
          <img src="https://picsum.photos/320/400" />
          <div className="Blog-Image-Details">
            <div className="Blog-circle"></div>
            <div className="Blod-Image-Name">Bahar Piltan | July 22, 2021</div>
          </div>
          <div className="Blog-Image-Content">
            <div className="Blog-Image-Hedding">
              Sustainable Clothing Brands
            </div>
            <div className="Blog-Image-Last-Content">
              Over the last few weeks, and as report previously in our first
              article{" "}
            </div>
          </div>
        </div>
        <div className="Blog-Image">
          <img src="https://picsum.photos/320/400" />
          <div className="Blog-Image-Details">
            <div className="Blog-circle"></div>
            <div className="Blod-Image-Name">Bahar Piltan | July 22, 2021</div>
          </div>
          <div className="Blog-Image-Content">
            <div className="Blog-Image-Hedding">
              Sustainable Clothing Brands
            </div>
            <div className="Blog-Image-Last-Content">
              Over the last few weeks, and as report previously in our first
              article{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="Blog-Buttons">
        <Book_It_Now content="View More" />
      </div>
    </div>
  );
}

export default Blog;
