import React from "react";
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComp() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Google-Books-Search</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
