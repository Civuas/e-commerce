import React from 'react';
import { Icon, Nav, Navbar } from 'rsuite';
import NavItem from 'rsuite/es/Nav/NavItem';
import '../styles/index.css';

const Navigationbar = () => (
  <Navbar>
    <Navbar.Header>
      <a href="/" className="navbar-brand logo">
        RSUITE
      </a>
    </Navbar.Header>
    <Navbar.Body>
      <Nav pullRight>
        <NavItem href="/checkout" icon={<Icon icon="shopping-bag" />}>
          cart
        </NavItem>
      </Nav>
    </Navbar.Body>
  </Navbar>
);

export default Navigationbar;
