import React from 'react';
import { Icon, Nav, Navbar } from 'rsuite';
import NavItem from 'rsuite/es/Nav/NavItem';
import '../styles/index.css';
import { useCart } from '../libs/CartContext';

const Navigationbar = () => {
  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Navbar>
      <Navbar.Header>
        <a href="/" className="navbar-brand logo">
          E-Commerce
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <NavItem href="/checkout" icon={<Icon icon="shopping-bag" />}>
            Cart
          </NavItem>
          <NavItem href="/checkout">${cartItemsTotal}</NavItem>
          <NavItem href="/checkout">${cartPriceTotal}</NavItem>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Navigationbar;
