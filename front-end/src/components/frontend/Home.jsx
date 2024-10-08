import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const home = () => {
  return (
    <div>
      <header>
        <div className="container-full">
          <div className="container">
            <Navbar expand="lg">
              <Navbar.Brand href="#home" className="logo"><span>Magic</span>bricks</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/" className="nav-link">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/about" className="nav-link">
                    About Us
                  </Nav.Link>
                  <Nav.Link href="/about" className="nav-link">
                    Sevices
                  </Nav.Link>
                  <Nav.Link href="/about" className="nav-link">
                    Our Projects
                  </Nav.Link>
                  <Nav.Link href="/about" className="nav-link">
                    Blogs
                  </Nav.Link>
                  <Nav.Link href="/about" className="nav-link">
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </header>
    </div>
  );
};

export default home;
