import React from "react";
import { slide as Menu } from "react-burger-menu";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
   
function SNav() {
  return (
    <div className="SNav-Body">
      <div className="S-navbar">
        <div className="S-Nav-Logo-Container">
          {" "}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/Sports%2FS-Logo.png?alt=media&token=f70fce6f-014c-4deb-91e8-c36473cec6cf"
            height={55}
            width={150}
            className="S-Nav-Logo"
          />
        </div>
        <div className="S-Nav-Icons">
          <div className="S-Nav-Menu-Container">
            <AiOutlineMenu  color="white" />
            <div className="S-Nav-Menu-Text">Menu</div>
          </div>
          <AiOutlineSearch className="S-Nav-Icon" color="white" />
          <AiOutlineHeart className="S-Nav-Icon" color="white" />
          <BsHandbag className="S-Nav-Icon" color="white" />
        </div>
      </div>
      <div className="Hedder-Body">
        <p className="S-Hedder-Intro">CLASSSIC MEN'S SHOES & FASHION</p>
        <div className="S-Hedder-Hedding">Men's Classic Shoes 2022</div>
        <div className="S-Hedder-Content">
          Step into a new realm of Air with the Nike Air Max Zephyr. It brings
          the soft cushioning of visible of Air with the Nike Air Max Zephyr.
        </div>
        <div className="S-Hedder-Button-Container">
          <button className="S-Hedder-Button">EXPLORE MORE</button>
        </div>
      </div>
    </div>
  );
}

export default SNav;
