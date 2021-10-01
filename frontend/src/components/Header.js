import React from 'react'
import { Navbar, Nav, Container,  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <div>
          <header>
            <Navbar bg="dark" variant="dark" collapseOnSelect className="py-3">
              <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand><img src='/resources/images/ATG 2.png' alt="Logo"  width="60%" /></Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                  <LinkContainer to='/'>
                    <Nav.Link href="#home">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/shop'>
                    <Nav.Link href="#features">Shop</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/blog'>
                   <Nav.Link href="#pricing">Blog</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about'>
                    <Nav.Link href="">About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/contact'>
                   <Nav.Link href="">Contact</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Container>
            </Navbar>
          </header>
        </div>
    )
}

export default Header
