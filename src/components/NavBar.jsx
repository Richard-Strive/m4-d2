import React from "react"
import {Navbar, Nav} from "react-bootstrap"

const NavBar =(props)=>{
    return(
        <div>
<Navbar style={{backgroundColor: props.color}} expand="lg">
    <Navbar.Brand href="#home">{props.title}StriveBooks</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}

export default NavBar