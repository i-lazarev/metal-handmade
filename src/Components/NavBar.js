import React from "react";
// import {
//   Navbar,
//   Nav
// } from "react-bootstrap";
import "../Styles/NavBar.css"

const NavBar = () => {
  return (
    <div id="navContainer">
      <h1 id="title">!handmade</h1>
      <hr id="hr"/>
    </div>
    // <Navbar bg="dark" variant="dark" expand="lg">
    //   <Navbar.Brand href="#home">Handmade</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="/">Home</Nav.Link>
    //       <Nav.Link href="/furniture">Furniture</Nav.Link>
    //       <Nav.Link href="/contact">Contact</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default NavBar;
