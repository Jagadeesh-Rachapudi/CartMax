import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BsSearch, BsHandbag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";

function ENavBar() {
  return (
    <div className="E-Nav-Container">
      <div className="E-Navbarcontainer">
        <img
          className="E-NavLogo"
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FE-Logo.png?alt=media&token=095ab088-4049-49e3-910c-d0be0b39357d"
          width="150"
          height="50"
        />
        <Navbar bg="white" expand="lg" className="E-Navbar">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="E-Navlinks">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "1000px" }}
                  navbarScroll
                >
                  <Nav.Link href="#Home" className="E-Nav-Links">
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="About Us"
                    id="basic-nav-dropdown"
                    className="E-Nav-Links"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      About US
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Blog"
                    id="basic-nav-dropdown"
                    className="E-Nav-Links"
                  >
                    <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Pages"
                    id="basic-nav-dropdown"
                    className="E-Nav-Links"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Pages
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#Features" className="E-Nav-Links">
                    Features
                  </Nav.Link>
                  <Nav.Link href="#Contactus" className="E-Nav-Links">
                    ContactUs
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="E-RightIcons">
        <FiHeadphones size={20} className="E-Call-Icon" />
        <div className="E-Customer-Detailes">
          <div className="E-Customer-Detailes-num">
            <b> Support </b> (+800) 856 800 604
          </div>
          <div className="E-Customer-Detailes-mail">
            {" "}
            <b>E-mail:</b> info@cartmax.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default ENavBar;
