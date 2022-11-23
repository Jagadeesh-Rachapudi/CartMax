import React from "react";
import { MdLocationOn } from "react-icons/md";
function EFooter() {
  return (
    <div className="EFooter-Body">
      <div className="EFooter-Part1">
        <div className="EFooter-part1-body">
          <div className="EFooter-Logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FE-Logo.png?alt=media&token=095ab088-4049-49e3-910c-d0be0b39357d"
              width="150"
              height="50"
            />
            <div className="EFooter-logo-Content">
              Orci varius nato que penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Integer vel nisi lorem. Donec dignissim
              non est ut pulvinar. Dlobortis metus libero commodo rhon cusnunc
              libero tarcu.
            </div>
            <div className="EFooter-Button-Conatiner">
              <button className="EF-Footer-Button">More About</button>
            </div>
          </div>
          <div className="EFooter-Central">
            <div className="EFooter-Link-Hedding">Buyer-Central</div>
            <div className="EFooter-Link-Container">
              <a className="EFooter-Link" href="#Sigin">
                Sign in
              </a>
              <a
                className="EFooter-Link"
                href="#BuyerProtection"
                target="_blank"
              >
                Buyer Protection
              </a>
              <a className="EFooter-Link" href="#PaymentOption" target="_blank">
                Payment Options
              </a>
              <a
                className="EFooter-Link"
                href="#ShippingPolicy"
                target="_blank"
              >
                Shipping Policy
              </a>
              <a
                className="EFooter-Link"
                href="#ShippingPolicy"
                target="_blank"
              >
                Retun Policy
              </a>
            </div>
          </div>
          <div className="EFooter-Central">
            <div className="EFooter-Link-Hedding">Information</div>
            <div className="EFooter-Link-Container">
              <a className="EFooter-Link" href="#">
                About Us
              </a>
              <a
                className="EFooter-Link"
                href="#BuyerProtection"
                target="_blank"
              >
                Brand of Trust
              </a>
              <a className="EFooter-Link" href="#PaymentOption" target="_blank">
                Market History
              </a>
              <a
                className="EFooter-Link"
                href="#ShippingPolicy"
                target="_blank"
              >
                News
              </a>
              <a
                className="EFooter-Link"
                href="#ShippingPolicy"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="EFooter-Central">
            <div className="EFooter-Link-Hedding">Conatct info</div>
            <div className="EFooter-Link-Container">
              <div className="EFooter-Link-Icon-Container">
                <MdLocationOn
                  color="##23292D"
                  size={20}
                  className="EFooter-Icon"
                />
                <a className="EFooter-Link">
                  1789 Street Name, City Name, United States
                </a>
              </div>
              <div className="EFooter-Link-Icon-Container">
                <MdLocationOn
                  color="##23292D"
                  size={20}
                  className="EFooter-Icon"
                />
                <a className="EFooter-Link">0092 - 123 455 789 +123 958 789</a>
              </div>
              <div className="EFooter-Link-Icon-Container">
                <MdLocationOn
                  color="##23292D"
                  size={20}
                  className="EFooter-Icon"
                />
                <a className="EFooter-Link">Email: support@Cartmax.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="EFooter-Part1"></div>
    </div>
  );
}

export default EFooter;
