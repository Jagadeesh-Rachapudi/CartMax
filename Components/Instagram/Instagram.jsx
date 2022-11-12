import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
function Instagram() {
  return (    
    <div className="Instagram-Body">
      <div className="Insta-Intro">JACKET & COAST</div>
      <div className="Insta-Hedding">@Cartmax Instagram</div>
      <div className="Insta-bg">
        <div className="Insta-tiles">
          <div className="Insta-Tiles-Col-1">
            <div className="Insta-tailes-black"></div>
            <div className="Inst-tailes-white"></div>
          </div>
          <div className="Insta-Tiles-Col-2">
            <div className="Inst-tailes-white"></div>
            <div className="Insta-tailes-black"></div>
          </div>
          <div className="Insta-Tiles-Col-3">
            <div className="Insta-tailes-black"></div>
            <div className="Inst-tailes-white"></div>
          </div>
          <div className="Insta-Tiles-Col-4">
            <div className="Inst-tailes-white"></div>
            <div className="Insta-tailes-black"></div>
          </div>
          <div className="Insta-Tiles-Col-5">
            <div className="Insta-tailes-black"></div>
            <div className="Inst-tailes-white"></div>
          </div>
          <div className="Insta-Tiles-Col-6">
            <div className="Inst-tailes-white"></div>
            <div className="Insta-tailes-black"></div>
          </div>
        </div>
      </div>

      <div className="Insta-bottom">
        <div className="Insta-Icons">
          <div className="Insta-Icon">
            <FaShippingFast className="Insta-Fast-Icon" />
            <div className="Insta-Fast-Icon-Hedding">Free Shipping</div>
            <div className="Insta-Fast-Icon-Content">
              Over the last few weeks, and as reported previously in our first
              article
            </div>
          </div>
          <div className="Insta-Icon">
            <RiCustomerService2Line className="Insta-Fast-Icon" />
            <div className="Insta-Fast-Icon-Hedding">24/7 Customer Service</div>
            <div className="Insta-Fast-Icon-Content">
              Over the last few weeks, and as reported previously in our first
              article
            </div>
          </div>
          <div className="Insta-Icon">
            <GiReceiveMoney className="Insta-Fast-Icon" />
            <div className="Insta-Fast-Icon-Hedding">Money Back Guarante</div>
            <div className="Insta-Fast-Icon-Content">
              Over the last few weeks, and as reported previously in our first
              article
            </div>
          </div>
        </div>
      </div>
      <div >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FInsta%20last%20adds.png?alt=media&token=397fd731-ce84-4806-871e-3ab30cd1a25b"
          className="insta-last-adds"
        />
      </div>
    </div>
  );
}

export default Instagram;
