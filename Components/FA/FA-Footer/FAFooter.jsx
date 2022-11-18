import React from "react";
import {
  AiFillTwitterCircle,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { ImMail2 } from "react-icons/im";
function FAFooter() {
  return (
    <div className="FA-Footer-Body">
      <div className="FA-Footer-Row1">
        <div className="FA-Footer-Heddings">
          <div className="FA-Footer-Hedding">Subscribe Newsletter</div>
          <div className="FA-Footer-Sub-Hedding">
            Contact us 24 hours a day, 7 days a week
          </div>
        </div>
        <div className="FA-Footer-Forms">
          <form className="FA-Footer-Form-Button-Container">
            <input
              type="text"
              className="FA-Footer-Form"
              placeholder="Your email"
            />
            <button className="FA-Footer-Form-Button">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      {/* =============================================== */}
      <div className="FA-Footer-Part2">
        <div className="FA-Footer-Part2-Row1">
          <img src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FLogo%20(1).png?alt=media&token=a9236c29-8aa0-4e63-900c-9e45963f1ac1" />
          <div className="FA-Footer-Part2-Links">
            <div className="FA-Footer-Part2-Link">
              <BsFacebook
                color="#C2C2C2"
                size={20}
                className="FA-Footer-Part2-Link"
              />
              <AiFillTwitterCircle
                color="#C2C2C2"
                size={20}
                className="FA-Footer-Part2-Link"
              />
              <BsYoutube
                color="#C2C2C2"
                size={20}
                className="FA-Footer-Part2-Link"
              />
              <BsInstagram
                color="#C2C2C2"
                size={20}
                className="FA-Footer-Part2-Link"
              />
              <ImMail2
                color="#C2C2C2"
                size={20}
                className="FA-Footer-Part2-Link"
              />
            </div>
          </div>
        </div>
        <div className="FA-Footer-Part2-Row2">
          <div className="FA-Footer-Part2-Row2-Col1">
            <div className="FA-Footer-Row2-Part2-Hedding">About us</div>
            <div className="FA-Footer-Row2-Part2-Content">
              Orci varius nato que penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Integer vel nisi lorem. Donec dignissim
              non est ut pulvinar. Dlobortis metus libero commodo rhon cusnunc
              libero tarcu.
            </div>
          </div>
          <div className="FA-Footer-Part2-Row2-Col2">
            <div className="FA-Footer-Row2-Part2-Hedding">Useful links</div>
            <div className="FA-Footer-Row2-Part2-Links">
              <a
                href="#about"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                About
              </a>
              <a
                href="#Blog"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Blog
              </a>
              <a
                href="#Agencies"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Agencies
              </a>
              <a
                href="#Conatct"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Conatct
              </a>
            </div>
          </div>
          <div className="FA-Footer-Part2-Row2-Col3">
            <div className="FA-Footer-Row2-Part2-Hedding">Help & Support</div>
            <div className="FA-Footer-Row2-Part2-Links">
              <a
                href="#Login"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Login
              </a>
              <a
                href="#Myaccount"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                My account
              </a>
              <a
                href="#Subscribe"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Subscribe
              </a>
              <a
                href="#Conatct"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Conatct
              </a>
            </div>
          </div>
          <div className="FA-Footer-Part2-Row2-Col4">
            <div className="FA-Footer-Row2-Part2-Hedding">Get in touch</div>
            <div className="FA-Footer-Row2-Part2-Icon-Container">
              <HiLocationMarker
                color="#C2C2C2"
                size={20}
                className="FA-Footer-Part2-Row2-Link"
              />
              <div className="FA-Footer-Part2-Row2-addr">
                333 Middle Winchendon Rd, Rindge, NH 03461
              </div>
            </div>
            <div className="FA-Footer-Row2-Part2-Icon-Container">
              <AiFillPhone
                color="#C2C2C2"
                size={20}
                className="FA-Footer-Part2-Row2-Link"
              />
              <div className="FA-Footer-Part2-Row2-addr">
                125-711-811 | 125-668-886
              </div>
            </div>
            <div className="FA-Footer-Row2-Part2-Icon-Container">
              <AiOutlineMail
                color="#C2C2C2"
                size={20}
                className="FA-Footer-Part2-Row2-Link"
              />
              <a
                href="mailto:Rachapudijagadeesh9580@gmail.com"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Support.cartmax@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="FA-Footer-Row2-Hidden">
          <div className="FA-Footer-Part2-Row2-Col2-2-Hidden">
            <div className="FA-Footer-Row2-Part2-Hedding">Useful links</div>
            <div className="FA-Footer-Row2-Part2-Links">
              <a
                href="#about"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                About
              </a>
              <a
                href="#Blog"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Blog
              </a>
              <a
                href="#Agencies"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Agencies
              </a>
              <a
                href="#Conatct"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Conatct
              </a>
            </div>
          </div>
          <div className="FA-Footer-Part2-Row2-Col3-hidden">
            <div className="FA-Footer-Row2-Part2-Hedding">Help & Support</div>
            <div className="FA-Footer-Row2-Part2-Links">
              <a
                href="#Login"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Login
              </a>
              <a
                href="#Myaccount"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                My account
              </a>
              <a
                href="#Subscribe"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Subscribe
              </a>
              <a
                href="#Conatct"
                target="_blank"
                className="FA-Footer-Row2-Part2-Link"
              >
                Conatct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAFooter;
