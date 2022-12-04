import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BsSearch, BsHandbag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";

function FANAVBAR() {
  return (
    <div className="FA-Navbarcontainer">
      <div className="FA-Icons">
        <button className="FA-Icon FA-SearchIcon">
          <BsSearch />
        </button>
        <div className="FA-Icon">
          <AiOutlineUser />
        </div>
        <div className="FA-Icon">
          <AiOutlineHeart />
        </div>
        <div className="FA-Icon">
          <BsHandbag />
        </div>
      </div>
      <img
        className="FA-NavLogo"
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FLogo.png?alt=media&token=3993c197-c111-4ed0-a13c-8bb95ba7a7d4"
        width="150"
        height="50"
      />
      <Navbar bg="light" expand="lg" className="FA-Navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="FA-Navlinks">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "1000px" }}
                navbarScroll
              >
                <Nav.Link href="/HF">Home</Nav.Link>
                <Nav.Link href="/E">Promotions</Nav.Link>
                <Nav.Link href="/F">Shop</Nav.Link>
                <Nav.Link href="/FA">Product</Nav.Link>
                <Nav.Link href="/shoes_home_01">Blog</Nav.Link>
                <Nav.Link href="/Watch">Pages </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
          <div className="FA-RightIcons">
            <button className="FA-navSearchicon">
              <BsSearch />
            </button>
            <div className="FA-Navrighticon ">
              <AiOutlineUser />
            </div>
            <div className="FA-Navrighticon">
              <AiOutlineHeart />
            </div>
            <div className="FA-Navrighticon FA-lasticon">
              <BsHandbag />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default FANAVBAR;
