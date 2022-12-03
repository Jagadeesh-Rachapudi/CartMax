import React from "react";

function SMCat() {
  return (
    <div className="SMCat-Body">
      <div className="tag">Hot Categories</div>
      <div className="title">Featured Categories</div>
      <div className="container">
        <div className="product1 h1">
          <div className="img-Container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Fkitchen.png?alt=media&token=841cb8d5-5a77-4922-8a36-39465f2b2f29"
              className="img"
            />
          </div>
          <div className="title">Home & Kitchen</div>
          <div className="Count">26 items</div>
        </div>
        <div className="product1 h2 " style={{ backgroundColor: "#FFFCEB" }}>
          <div className="img-Container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Fclothes.png?alt=media&token=a01aac3e-20dc-41cd-ad6b-d05a9aececc3"
              className="img"
            />
          </div>
          <div className="title">Fashion</div>
          <div className="Count" style={{ backgroundColor: "#FBF5D3" }}>
            26 items
          </div>
        </div>
        <div className="product1 h3 " style={{ backgroundColor: "#ECFFEC" }}>
          <div className="img-Container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Ffashion.png?alt=media&token=0e05d08b-a96a-4d6e-b36a-17e7077357b2"
              className="img"
            />
          </div>
          <div className="title">Shoes & Outdoor</div>
          <div className="Count" style={{ backgroundColor: "#CDFFCD" }}>
            26 items
          </div>
        </div>
        <div className="product1 h4 " style={{ backgroundColor: "#FEEFEA" }}>
          <div className="img-Container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Fgadgets.png?alt=media&token=a37d8309-1731-462b-8255-867218af278a"
              className="img"
            />
          </div>  
          <div className="title">Electrionics</div>
          <div className="Count" style={{ backgroundColor: "#FDE1D7" }}>
            26 items
          </div>
        </div>
        <div className="product1 h5 " style={{ backgroundColor: "#FDE1D7" }}>
          <div className="img-Container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Fcosmetics.png?alt=media&token=c578cd90-5fa9-4769-8f8a-caaac9a1af8f"
              className="img"
            />
          </div>
          <div className="title">Cosmotics</div>
          <div className="Count" style={{ backgroundColor: "#FEE1FE" }}>
            26 items
          </div>
        </div>
        <div className="product1   h6  " style={{ backgroundColor: "#F2FCE4" }}>
          <div className="img-Container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2Fjewelry.png?alt=media&token=956f69b9-d233-4b23-b917-5aa3ed9b3ce6"
              className="img"
            />
          </div>
          <div className="title">Watch & Jewellry</div>
          <div className="Count" style={{ backgroundColor: "#E3FBC2" }}>
            26 items
          </div>
        </div>
      </div>
      <div className="Container2">
        <div className="p1 h7 ">
          <div className="p1title">LOVE YOUR WATCH</div>
          <div className="p1text">
            items as low as US $6.99!
            <br />
            Receive a free Gift with every order
          </div>
        </div>
        <div className="p2 h8 ">
          <div className="p2title">
            NAILS WORTH <br /> FLAUNTING
          </div>
          <div className="p2text">
            Fashion Nails <br /> everywhere you go
          </div>
        </div>
        <div className="p3 h9 ">
          <div className="p3title">BRAND ZONE</div>
          <div className="p3text">
            FEATURED BRANDS <br /> ALL STARS
          </div>
        </div>
      </div>
    </div>
  );
}

export default SMCat;
