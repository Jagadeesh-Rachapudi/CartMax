import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdCall, MdMail } from "react-icons/md";

function Footer() {
  return (
    <div className="Footer-Body">
      .
      <div className="Footer-Hedding">
        Clearance Sales <br />
        Up to 70% Off. All Sales are Final!
      </div>
      <div className="Footer-Form-Button-container">
        <div className="Footer-Form-Container">
          <input
            type="email"
            placeholder="Subcribe Your Email"
            className="Footer-Form"
          />
        </div>
        <div className="Footer-Button-Container">
          <Button
            type="button"
            class="btn btn-dark btn-lg"
            className="Footer-Button"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <hr className="Footer-Line" />
      {/* ====================== */}
      <div className="Footer-Bottom-Links">
        <div className="Footer-Logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FFooter-Logo.png?alt=media&token=08db1d66-f0f6-4dd1-bd13-1eac48b19e7a"
            alt="Logo-Pic"
          />
          <div className="Footer-Logo-Content">
            Fashion trends are influenced by several factors ncluding cinema,
            celebrities, climate
          </div>
          <div className="Footer-Social-Links">
            <BsFacebook size={30} className="Footer-Social-Link" />
            <FaYoutube size={30} className="Footer-Social-Link" />
            <AiFillInstagram size={30} className="Footer-Social-Link" />
            <BsLinkedin size={30} className="Footer-Social-Link" />
          </div>
        </div>
        <div className="Footer-Support">
          <a href="#Support" className="Footer-Hedding-Link">
            Support
          </a>
          <hr className="Footer-Line-Social1" />
          <div className="Footer-Social-Last-Links">
            <a href="#About" className="Footer-Sub-Hedding-Link">
              About
            </a>
            <a href="#UsTermofService" className="Footer-Sub-Hedding-Link">
              UsTerm of Service
            </a>
            <a href="#PrivacyPolicy" className="Footer-Sub-Hedding-Link">
              Privacy Policy
            </a>
            <a href="#Promotion" className="Footer-Sub-Hedding-Link">
              Promotion
            </a>
            <a href="#Return" className="Footer-Sub-Hedding-Link">
              Return
            </a>
          </div>
        </div>
        <div className="Footer-Shop">
          <a href="#Shop" className="Footer-Hedding-Link">
            Shop
          </a>
          <hr className="Footer-Line-Social2" />
          <div className="Footer-Social-Last-Links">
            <a href="#MensShopping" className="Footer-Sub-Hedding-Link">
              Men’s Shopping
            </a>
            <a href="#WomensShopping" className="Footer-Sub-Hedding-Link">
              Women’s Shopping
            </a>
            <a href="#KidsShopping" className="Footer-Sub-Hedding-Link">
              Kids Shopping
            </a>
            <a href="#Discount" className="Footer-Sub-Hedding-Link">
              Discount
            </a>
            <a href="#Return" className="Footer-Sub-Hedding-Link">
              Return
            </a>
          </div>
        </div>
        <div className="Footer-Company">
          <a href="#Company" className="Footer-Hedding-Link">
            Company
          </a>
          <hr className="Footer-Line-Social3" />
          <div className="Footer-Social-Last-Links">
            <a href="#OurStory" className="Footer-Sub-Hedding-Link">
              Our Story
            </a>
            <a href="#Careers" className="Footer-Sub-Hedding-Link">
              Careers
            </a>
            <a href="#TremsConditions" className="Footer-Sub-Hedding-Link">
              Trems & Conditions
            </a>
            <a href="#PrivacyCookiePolicy" className="Footer-Sub-Hedding-Link">
              Privacy & Cookie Policy
            </a>
            <a href="#Return" className="Footer-Sub-Hedding-Link">
              Return
            </a>
          </div>
        </div>
        <div className="Footer-Contactus">
          <a href="#Contactus" className="Footer-Hedding-Link">
            Contact Us
          </a>
          <hr className="Footer-Line-Social4" />
          <div className="Footer-Social-Last-Links">
            <div className="Footer-Call">
              <MdCall className="Footer-Call-Icon" />
              <a href="#" className="Footer-Sub-Hedding-Link">
                1-888-923-8044
              </a>
            </div>
            <div className="Footer-Call">
              <MdCall className="Footer-Call-Icon" />
              <a href="#" className="Footer-Sub-Hedding-Link">
                1-888-923-8055
              </a>
            </div>
            <div className="Footer-Call">
              <MdMail className="Footer-Call-Icon" />
              <a
                href="mailto:Rachapudijagadeesh9580@gmail.com"
                target="_blank"
                className="Footer-Sub-Hedding-Link"
              >
                help@Cartmax.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* =================== */}
      <div className="Footer-Logo-sm No">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FFooter-Logo.png?alt=media&token=08db1d66-f0f6-4dd1-bd13-1eac48b19e7a"
          alt="Logo-Pic"
        />
        <div className="Footer-Logo-Content-sm">
          Fashion trends are influenced by several factors ncluding cinema,
          celebrities, climate
        </div>
        <div className="Footer-Social-Links-sm">
          <BsFacebook size={30} className="Footer-Social-Link" />
          <FaYoutube size={30} className="Footer-Social-Link" />
          <AiFillInstagram size={30} className="Footer-Social-Link" />
          <BsLinkedin size={30} className="Footer-Social-Link" />
        </div>
      </div>
      <div className="Footer-links-sm">
        <div className="Footer-Support">
          <a href="#Support" className="Footer-Hedding-Link">
            Support
          </a>
          <hr className="Footer-Line-Social1" />
          <div className="Footer-Social-Last-Links">
            <a href="#About" className="Footer-Sub-Hedding-Link">
              About
            </a>
            <a href="#UsTermofService" className="Footer-Sub-Hedding-Link">
              UsTerm of Service
            </a>
            <a href="#PrivacyPolicy" className="Footer-Sub-Hedding-Link">
              Privacy Policy
            </a>
            <a href="#Promotion" className="Footer-Sub-Hedding-Link">
              Promotion
            </a>
            <a href="#Return" className="Footer-Sub-Hedding-Link">
              Return
            </a>
          </div>
        </div>
        <div className="Footer-Shop">
          <a href="#Shop" className="Footer-Hedding-Link">
            Shop
          </a>
          <hr className="Footer-Line-Social2" />
          <div className="Footer-Social-Last-Links">
            <a href="#MensShopping" className="Footer-Sub-Hedding-Link">
              Men’s Shopping
            </a>
            <a href="#WomensShopping" className="Footer-Sub-Hedding-Link">
              Women’s Shopping
            </a>
            <a href="#KidsShopping" className="Footer-Sub-Hedding-Link">
              Kids Shopping
            </a>
            <a href="#Discount" className="Footer-Sub-Hedding-Link">
              Discount
            </a>
            <a href="#Return" className="Footer-Sub-Hedding-Link">
              Return
            </a>
          </div>
        </div>
        <div className="Footer-Company">
          <a href="#Company" className="Footer-Hedding-Link">
            Company
          </a>
          <hr className="Footer-Line-Social3" />
          <div className="Footer-Social-Last-Links">
            <a href="#OurStory" className="Footer-Sub-Hedding-Link">
              Our Story
            </a>
            <a href="#Careers" className="Footer-Sub-Hedding-Link">
              Careers
            </a>
            <a href="#TremsConditions" className="Footer-Sub-Hedding-Link">
              Trems & Conditions
            </a>
            <a href="#PrivacyCookiePolicy" className="Footer-Sub-Hedding-Link">
              Privacy & Cookie Policy
            </a>
            <a href="#Return" className="Footer-Sub-Hedding-Link">
              Return
            </a>
          </div>
        </div>
        <div className="Footer-Contactus">
          <a href="#Contactus" className="Footer-Hedding-Link">
            Contact Us
          </a>
          <hr className="Footer-Line-Social4" />
          <div className="Footer-Social-Last-Links">
            <div className="Footer-Call">
              <MdCall className="Footer-Call-Icon" />
              <a href="#" className="Footer-Sub-Hedding-Link">
                1-888-923-8044
              </a>
            </div>
            <div className="Footer-Call">
              <MdCall className="Footer-Call-Icon" />
              <a href="#" className="Footer-Sub-Hedding-Link">
                1-888-923-8055
              </a>
            </div>
            <div className="Footer-Call">
              <MdMail className="Footer-Call-Icon" />
              <a
                href="mailto:Rachapudijagadeesh9580@gmail.com"
                target="_blank"
                className="Footer-Sub-Hedding-Link"
              >
                help@Cartmax.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* =================== */}
      <div className="Footer-Copy-Cards">
        <div className="Footer-Copy">© 2022 All rights reserved.</div>
        <img
          className="Footer-Cards"
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FCards.png?alt=media&token=a1777530-da8b-49fa-8043-b305821c6a2d"
        />
      </div>
    </div>
  );
}

export default Footer;
