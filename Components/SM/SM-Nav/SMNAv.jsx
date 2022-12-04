import React from "react";
import { BsBag } from "react-icons/bs";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { GiHamburgerMenu } from "react-icons/gi";

function SMNAv() {
  return (
    <div className="SMNav-Body">
      <div className="SMNav-TopRibbon">
        <div className="SMNav-TopRibbon-1">
          Express Deilivery and free returns within 30 days
        </div>
        <div className="SMNav-TopRibbon-2">
          <div>My Account</div>
          <div>My Wishlist</div>
          <div>Sign In</div>
          <div>Compare</div>
          <div>USD</div>
          <div>English</div>
        </div>
      </div>
      <hr />
      <div className="SMNav-Search">
        <div className="SMNav-Logo-Container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2FLogo.png?alt=media&token=7cfa3b3f-ba00-4a20-9e1f-bcd40af1d3f9"
            className="SMNav-Logo"
          />
        </div>
        <form className="SMNav-Form-Button-Container">
          <input
            type="text"
            className="SMNav-Form"
            placeholder="All Categories"
          />
          <button className="SMNav-Form-Button">Search</button>
        </form>
        <div className="SMNav-Cart-Container">
          <BsBag color="white" className="SMNav-Cart" size={20} />
          <div className="SMNav-Cart-Text">
            <div className="SMNav-Cart-title">My Cart:</div>
            <article className="SMNav-Cart-Price">$255.00</article>
          </div>
        </div>
      </div>
      <hr />
      <div className="SMNav-Menu">
        <div className="SMNav-Drwaer-Container">
          <Dropdown className="SMNav-Drwaer">
            <Dropdown.Toggle id="dropdown-basic">
              <AiOutlineMenu className="SMNav-Burger-Icon" />
              SHOP BY DEPARTMENT
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" className="DropDown-Link">
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Best Seller Products
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Top 10 Offers
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                New Arrivals
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Phone & Tablets
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Electronics & Digital
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Fashion & Clothings
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Jewelry & Watches
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Heath & Beauty
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                TV & Audio
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Sound & Speaker
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Gadgets
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Toys & Hobbies
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Heath & Beauty
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Asus
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Acessories
              </Dropdown.Item>
              <Dropdown.Item href="#" className="DropDown-Link">
                Art & Craft
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="SMNav-Burger-Icon-Container">
          <GiHamburgerMenu
            color="white"
            className="SMNav-Burger-Icon"
            size={30}
          />
        </div>
        <div className="SMNav-Conatiner">
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/HF" className="SMNav-Nav-Link">
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="About US"
                    id="basic-nav-dropdown"
                    className="SMNav-Nav-Link"
                  >
                    <NavDropdown.Item className="SMNav-Nav-Link2" href="/E">
                      About Us
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Blog"
                    id="basic-nav-dropdown"
                    className="SMNav-Nav-Link"
                  >
                    <NavDropdown.Item className="SMNav-Nav-Link2" href="/F">
                      Blog
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Pages"
                    id="basic-nav-dropdown"
                    className="SMNav-Nav-Link"
                  >
                    <NavDropdown.Item className="SMNav-Nav-Link2" href="/FA">
                      Pages
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/shoes_home_01" className="SMNav-Nav-Link">
                    Features
                  </Nav.Link>
                  <Nav.Link href="/Watch" className="SMNav-Nav-Link">
                    Ccontact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="SMNav-Hotline-Container">
          <AiOutlineBell size={20} color="white" className="SMNav-Bell" />
          <div className="SMNav-Hotline-Text">
            <b>Hotline:</b>
          </div>
          <div className="SMNav-Hotline-Number">(+100) 123 456 7890</div>
        </div>
      </div>
    </div>
  );
}

export default SMNAv;
