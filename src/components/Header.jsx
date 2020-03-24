import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export function Header() {
    return <Navbar bg="light" expand="lg"fixed="top">
    <Navbar.Brand href="#home">Andrew Kulinich</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/jobs">Job History</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/education">Education</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
};