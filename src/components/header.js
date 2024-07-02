import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoJavas from "../assets/logoJavas.png";

const Navigation = () => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="rounded-bottom-1"
      style={{ backgroundColor: "#2d3d50" }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logoJavas}
            width="120"
            height="40"
            className="d-inline-block align-top ms-5"
            alt="Logo Javas RC"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ color: "#e5e7ea", backgroundColor:"white"}}
        />
        <Navbar.Collapse id="navbarScroll" style={{ color: "#e5e7ea" }}>
          <Nav
            className="ms-auto my-2 my-lg-0 me-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#home"
              style={{
                fontFamily: "sans-serif",
                color: "#e5e7ea",
                textAlign: "center",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#tentang-kami"
              style={{
                fontFamily: "sans-serif",
                color: "#e5e7ea",
                textAlign: "center",
              }}
            >
              Tentang Kami
            </Nav.Link>
            <Nav.Link
              href="#daftar-mobil"
              style={{
                fontFamily: "sans-serif",
                color: "#e5e7ea",
                textAlign: "center",
              }}
            >
              Daftar Mobil
            </Nav.Link>
            <Nav.Link
              href="#hubungi-kami"
              style={{
                fontFamily: "sans-serif",
                color: "#e5e7ea",
                textAlign: "center",
              }}
            >
              Hubungi Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

class Header extends Component {
  render() {
    return (
      <main>
        <Navigation />
      </main>
    );
  }
}

export default Header;
