import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function NavBar() {
  return (
    <ReactBootStrap.Navbar bg="light" expand="lg">
      <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="/">Michael Rivas</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/Projects">Projects</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="More" id="basic-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="/About">About</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/Contact">Contact</ReactBootStrap.NavDropdown.Item>
              {/* <ReactBootStrap.NavDropdown.Item href="#action/3.4">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
  <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item> */}
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
}

export default NavBar;
