// components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>React CRUD App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/posts">
            <Nav.Link>Posts</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/posts/create">
            <Nav.Link>Create Post</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
