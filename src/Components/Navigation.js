import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import LogoElemes from "../img/logo.png";

export default function Navigation() {
  return (
    <>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src={LogoElemes}
              height="50"
              className="d-inline-block align-top"
              alt="Elemes.id logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
              <Nav.Link className="navigation__link text-center">Home</Nav.Link>
              <Nav.Link className="navigation__link text-center">
                About
              </Nav.Link>
              <Nav.Link className="navigation__link text-center">
                Promotions
                <span className="navigation__badge-red">Hot</span>
              </Nav.Link>
              <Nav.Link className="navigation__link text-center">
                Blogs
              </Nav.Link>
              <Nav.Link className="navigation__link text-center">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="link" className="navigation__button-link">
                Masuk
              </Button>
              <Button className="navigation__button-primary">
                Daftar sekarang
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
