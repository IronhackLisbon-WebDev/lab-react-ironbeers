import React from "react";
import {Navbar} from 'react-bootstrap'
import {Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div>
      <Navbar   className="d-flex justify-content-center" bg="primary" variant="dark" expand="lg">
        <Link to='/'>
        <Navbar.Brand > ☗ </Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
}
