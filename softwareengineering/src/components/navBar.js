import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import logo from "../img/logo.svg"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Redirect } from 'react-router-dom'

export default function NavBar() {
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0()
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Nav.Link onClick={() => <Redirect to="/" />}>
                <Navbar.Brand onClick={() => <Redirect to="/" />}>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Todo App"
                        href="#"
                    />{' '}
                    TODO
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                {
                    isLoading ? <div /> : isAuthenticated ? <Nav>
                        <Nav.Link href="#" onClick={logout}>signout</Nav.Link>
                    </Nav> : <Nav>
                        <Nav.Link href="#" onClick={loginWithRedirect}>Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#" onClick={loginWithRedirect}>
                            signup
                        </Nav.Link>
                    </Nav>
                }

            </Navbar.Collapse>
        </Container>
    </Navbar>
}