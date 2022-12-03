import React from "react";
import { GoLocation } from "react-icons/go";

function SMFooter() {
  return (
    <div className="SMFooter-Body">
      <div className="container">
        <div className="p1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2FLogo.png?alt=media&token=7cfa3b3f-ba00-4a20-9e1f-bcd40af1d3f9"
            className="img"
          />
          <div className="Content">
            Orci varius nato que penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Integer vel nisi lorem. Donec dignissim non
            est ut pulvinar. Dlobortis metus libero commodo rhon cusnunc libero
            tarcu.
          </div>
          <button className="Button">More About</button>
        </div>
        <div className="p2">
          <div className="Hedding">Buyer Central</div>
          <div className="Links">
            <a href="#" className="Link">
              Sign in
            </a>
            <a href="#" className="Link">
              Buyer Protection
            </a>
            <a href="#" className="Link">
              Payment Options
            </a>
            <a href="#" className="Link">
              Shipping Policy
            </a>
            <a href="#" className="Link">
              Return Policy
            </a>
          </div>
        </div>
        <div className="p3">
          <div className="Hedding">Information</div>
          <div className="Links">
            <a href="#" className="Link">
              About Us
            </a>
            <a href="#" className="Link">
              Band of Trust
            </a>
            <a href="#" className="Link">
              Market History
            </a>
            <a href="#" className="Link">
              News
            </a>
            <a href="#" className="Link">
              Contact us
            </a>
          </div>
        </div>
        <div className="p4">
          <div className="Hedding">Contact info</div>
          <div className="Icon-text">
            <GoLocation color="#0170dc" />
            <div className="text">
              1789 Street Name, City Name, <br /> United States
            </div>
          </div>
          <div className="Icon-text">
            <GoLocation color="#0170dc" />
            <div className="text">
              0092 - 123 455 789 <br /> +123 958 789
            </div>
          </div>
          <div className="Icon-text">
            <GoLocation color="#0170dc" />
            <div className="text">
              Email: support@Cartmax.com <br /> 9AM-5PM, Mon - Sat, GMT+3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SMFooter;
