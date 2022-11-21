import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import Table from "react-bootstrap/Table";
import { ImArrowDown } from "react-icons/im";
import { RiShipLine } from "react-icons/ri";
import { BiCoinStack } from "react-icons/bi";
import {
  AiTwotoneSound,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { BsPerson, BsBag, BsWallet2 } from "react-icons/bs";
function EHedder() {
  return (
    <div className="E-Hedder-Body">
      <div className="E-Hedder-Search">
        <AiTwotoneSound size={25} className="E-Hedder-Icon" />
        <div className="E-Hedder-Search-Texts">
          <div className="E-Hedder-Search-Text1">
            Shop & Store - Electronics & Digital
          </div>
          <div className="E-Hedder-Search-Text2">Responsive PrestaShop</div>
        </div>
        <from className="E-Hedder-Forms">
          <input
            type="text"
            placeholder="Search For Products"
            className="E-Hedder-Form-input"
          />
          <button className="E-Hedder-Form-Button">SUBSCRIBE</button>
        </from>
        <div className="E-Hedder-Right-Icons">
          <BsPerson size={20} className="E-Hedder-Right-Icon" />
          <AiOutlineHeart size={20} className="E-Hedder-Right-Icon" />
          <BsBag size={20} className="E-Hedder-Right-Icon" />
        </div>
      </div>
      <div className="E-Hedder-All-Dep">
        <Table className="E-Hedder-Table">
          <div className="E-Hedder-Table-Hedder">
            <div>
              <BiCoinStack size={35} />
              All Departments
            </div>
          </div>
          <tbody>
            <tr>
              <td className="E-Hedder-Table-Text">Value of the Day</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">Top 100 Offers</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">Laptops & Computers</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">Cameras & Photography</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">Smart Phones & Tablets</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">Video Games & Consoles</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">TV & Audio</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">Gadgets</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">Car Electronic & GPS</td>
            </tr>
            <tr>
              <td className="E-Hedder-Table-Text">Accesories</td>
            </tr>
          </tbody>
        </Table>
        <div className="E-Hedder-DropDown">
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              <BiCoinStack size={35} />
              All Departments
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> Value of the Day</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Top 100 Offers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">New Arrivals</Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                Laptops & Computers
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                Cameras & Photography
              </Dropdown.Item>
              <Dropdown.Item href="#/action-6">
                Smart Phones & Tablets
              </Dropdown.Item>
              <Dropdown.Item href="#/action-7">
                Video Games & Consoles
              </Dropdown.Item>
              <Dropdown.Item href="#/action-8">TV & Audio</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Gadgets</Dropdown.Item>
              <Dropdown.Item href="#/action-10">
                Car Electronic & GPS
              </Dropdown.Item>
              <Dropdown.Item href="#/action-10">Accesories</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="E-Hedder-Slide">
          <div className="E-Hedder-Slide-Content">
            <div className="E-Hedder-Slide-Offer">WEEKEND DISCOUNT</div>
            <div className="E-Hedder-Slide-Hedding">
              Feel - good Shopping <br /> <b>Shop what</b>
            </div>
            <div className="E-Hedder-Slide-Price">$339.99</div>
            <div className="E-Hedder-Slide-Button-Container">
              <button className="E-Hedder-Slide-Button">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="E-Hedder-Feature-Container">
        <div className="E-Hedder-Features E-Hedder-F-1 ">
          <RiShipLine size={50} color="blue" />
          <div className="E-Hedder-Feature-Text">
            <div className="E-Hedder-Feature-Text-Hedding ">Free Delivary</div>
            <div className="E-Hedder-Feature-Text-Content">
              Free shipping on all orders
            </div>
          </div>
        </div>
        <div className="E-Hedder-Features E-Hedder-F-2">
          <MdSupportAgent size={50} color="blue" />
          <div className="E-Hedder-Feature-Text">
            <div className="E-Hedder-Feature-Text-Hedding">
              Online support 24/7
            </div>
            <div className="E-Hedder-Feature-Text-Content">
              Online Support 24 hours a day
            </div>
          </div>
        </div>
        <div className="E-Hedder-Features E-Hedder-F-3 ">
          <BsWallet2 size={50} color="blue" />
          <div className="E-Hedder-Feature-Text">
            <div className="E-Hedder-Feature-Text-Hedding">Money Return</div>
            <div className="E-Hedder-Feature-Text-Content">
              Money Back Guarantee under 7 days
            </div>
          </div>
        </div>
        <div className="E-Hedder-Features E-Hedder-F-4 ">
          <ImArrowDown size={50} color="blue" />
          <div className="E-Hedder-Feature-Text">
            <div className="E-Hedder-Feature-Text-Hedding">Member Discount</div>
            <div className="E-Hedder-Feature-Text-Content">
              On every Order over $120.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EHedder;
