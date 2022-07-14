import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import ValidateChain from "../components/validatechain";


const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">Welcome</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/extendchain">
                            Extend Chain
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="m-5">
                <ValidateChain />
                <Outlet />
            </div>
        </>
    )

}

export default Layout