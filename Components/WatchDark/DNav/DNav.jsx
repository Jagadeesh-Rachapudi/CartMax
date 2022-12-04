import React from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BsPerson, BsBag } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function DNav() {
  return (
    <div className="DNav-body">
      <div className="container">
        <div className="p1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/Watch%2FLogo%20(1).png?alt=media&token=9d6fa2da-3f18-4f2b-ac8e-be95d5435dd9"
            className="img"
          />
        </div>
        <div className="p2">
          <div className="Burger-Container">
            <AiOutlineMenu className="Burger" color="white" />
          </div>
          <Navbar className="Navbar" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/F" className="Link">
                    HOME
                  </Nav.Link>
                  <Nav.Link href="/FA" className="Link">
                    PRODUCTS
                  </Nav.Link>
                  <Nav.Link href="/E" className="Link">
                    SHOP
                  </Nav.Link>
                  <Nav.Link href="*HF" className="Link">
                    BLOG
                  </Nav.Link>
                  <Nav.Link href="/Watch" className="Link">
                    PAGES
                  </Nav.Link>
                  <Nav.Link href="/shoes_home_01" className="Link">
                    CONTACT
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="p3">
          <AiOutlineSearch color="grey" size={30} className="icon" />
          <BsPerson color="grey" size={30} className="icon" />
          <AiOutlineHeart color="grey" size={30} className="icon" />
          <BsBag color="grey" size={30} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default DNav;
