import React from "react";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiOutlineGoogle, AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdCall } from "react-icons/md";
function SF() {
  return (
    <div className="SF-Body">
      <div className="SF-Parts">
        <div className="SF-P1">
          <div className="SF-Logo-Conatiner">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/Sports%2FS-Logo.png?alt=media&token=f70fce6f-014c-4deb-91e8-c36473cec6cf"
              className="SF-Logo"
            />
          </div>
          <div className="SF-Content">
            Vestibulum varius, velit sit amet tempor efficitur, lacinia libero,
            vehicula dui nisi eget purus. Nunc rutrum sed purus eget sagittis.
            In eleifend vulputate lestie
          </div>
          <div className="SF-Scoials">
            <BsFacebook color="#CCCCCC" size={30} />
            <BsTwitter color="#CCCCCC" size={30} />
            <BsYoutube color="#CCCCCC" size={30} />
            <AiOutlineGoogle color="#CCCCCC" size={30} />
          </div>
        </div>
        <div className="SF-P2">
          <div className="SF-Hedding">CONTACT US</div>
          <div className="SF-Icon-Addr-Container">
            <CiLocationOn color="#CCCCCC" size={20} className="SF-Icon" />
            <div className="SF-Addr">
              PO Box 16122 Collins Victoria 3000 Australia
            </div>
          </div>
          <div className="SF-Icon-Addr-Container">
            <AiOutlineMail color="#CCCCCC" size={20} className="SF-Icon" />
            <div className="SF-Addr">Email: info@chiart.abcdf.com</div>
          </div>
          <div className="SF-Icon-Addr-Container">
            <CiLocationOn color="#CCCCCC" size={20} className="SF-Icon" />
            <div className="SF-Addr">Phone: + 33 323 34522</div>
          </div>
          <div className="SF-Icon-Addr-Container">
            <MdCall color="#CCCCCC" size={20} className="SF-Icon" />
            <div className="SF-Addr">Fax: +33 3467888</div>
          </div>
        </div>
        <div className="SF-P3">
          <div className="SF-Hedding">INSTIGRAM</div>
          <div className="SF-Floor1">
            <div className="SF-Image1-Container SF-Image-Hide1">
              <img src="https://picsum.photos/75" className="SF-Image1" />
            </div>
            <div className="SF-Image2-Container SF-Image-Hide2">
              <img src="https://picsum.photos/75" className="SF-Image1" />
            </div>
            <div className="SF-Image3-Container SF-Image-Hide3">
              <img src="https://picsum.photos/75" className="SF-Image1" />
            </div>
          </div>
          <div className="SF-Floor1">
            <div className="SF-Image1-Container SF-Image-Hide4 ">
              <img src="https://picsum.photos/75" className="SF-Image1" />
            </div>
            <div className="SF-Image2-Container SF-Image-Hide5 ">
              <img src="https://picsum.photos/75" className="SF-Image1" />
            </div>
            <div className="SF-Image3-Container SF-Image-Hide6 ">
              <img src="https://picsum.photos/75" className="SF-Image1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SF;
