import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
function A41() {
  return (
    <div className="A41top-Body">
      <div className="A41-Body">
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
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Promotions">Promotions</Nav.Link>
                    <Nav.Link href="#Shop">Shop</Nav.Link>
                    <Nav.Link href="#Product">Product</Nav.Link>
                    <Nav.Link href="#Blog">Blog</Nav.Link>
                    <Nav.Link href="#Pages">Pages</Nav.Link>
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
      </div>
      <div className="A41AboutUs"> Online Exclusive</div>
      <div className="A41sub-Titles">
        <div className="A41SubActive">Home</div>
        <div>Shop</div>
        <div>SLhop-Lits</div>
      </div>
    </div>
  );
}

export default A41;
