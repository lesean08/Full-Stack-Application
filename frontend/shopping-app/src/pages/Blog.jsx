import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <div
                className="background2"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <h1>Blog</h1>
            </div>
            <Navbar style={{ backgroundColor: "#A3C1D4" }} expand="lg">
                <Navbar.Brand href="#home" style={{ color: "white", marginLeft: "20px" }}>
                    Natural Skin + Hair Care
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{ color: "white" }}> Skin </Nav.Link>
                        <Nav.Link href="#about" style={{ color: "white" }}> Hair </Nav.Link>
                        <Nav.Link href="#blog" style={{ color: "white" }}> Body </Nav.Link>
                        <Nav.Link href="#contact" style={{ color: "white" }}> Nutrients </Nav.Link>
                    </Nav>
                    <Form className="d-flex ml-auto">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-2"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <p>Find the latest information on Skin and Hair Care!!</p>
        </div>
    );
};

export default Blog;



