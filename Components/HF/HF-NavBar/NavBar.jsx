import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BsSearch, BsHandbag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";

function NavBar() {
  return (
    <div className="Navbarcontainer">
      <div className="Icons">
        <button className="Icon SearchIcon">
          <BsSearch />
        </button>  
        <div className="Icon">
          <AiOutlineUser />
        </div>
        <div className="Icon">
          <AiOutlineHeart />
        </div>
        <div className="Icon">
          <BsHandbag />
        </div>
      </div>
      <img
        className="NavLogo"
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FLogo.png?alt=media&token=3993c197-c111-4ed0-a13c-8bb95ba7a7d4"
        width="150"
        height="50"
      />
      <Navbar bg="light" expand="lg" className="HFNavbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="Navlinks">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "1000px" }}
                navbarScroll
              >
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Promotions">Promotions</Nav.Link>
                <Nav.Link href="#Shop">Shop</Nav.Link>
                <Nav.Link href="#Product">Product</Nav.Link>
                <Nav.Link href="#Blog">Blog</Nav.Link>
                <Nav.Link href="#Pages">Pages</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
          <div className="RightIcons">
            <button className="HFnavSearchicon">
              <BsSearch />
            </button>
            <div className="Navrighticon ">
              <AiOutlineUser />
            </div>
            <div className="Navrighticon">
              <AiOutlineHeart />
            </div>
            <div className="Navrighticon lasticon">
              <BsHandbag />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
