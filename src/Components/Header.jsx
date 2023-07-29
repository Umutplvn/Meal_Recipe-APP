import React from 'react'
import icon from "../assets/icon.png"
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate=useNavigate()

  return (
    <div className='header-style'>
        <div className='div-img'>
        <img  src={icon} alt="" onClick={()=>navigate("/")} />
        </div>
        <div className='div'>
        <h3 className='header-title'>Flying Aprons</h3>
        </div>
        <div className='div'>
             
        <Navbar expand="lg" className="nav">
      <Container className='me-3'> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-start d-flex gap-3 p-2 nav">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/about">About</NavLink>
            <NavLink  className="link" to="/categories">Categories</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
       
    </div>



  )
}

export default Header