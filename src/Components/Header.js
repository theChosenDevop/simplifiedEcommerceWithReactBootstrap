import React, { useState, useContext, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { ThemeContext } from "../GlobalComponents/ThemeProvider";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import {Link} from '@reach/router';

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant={darkMode ? "dark" : "light"}
      className={
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      style={{ width: "100%", position: "fixed", zIndex: 100 }}
    >
      <Container>
        <Link to='/'>
        <Navbar.Brand
          className={darkMode ? "text-dark-primary" : "text-light-primary"}
        >
          {" "}
          <b>Gedaliah</b>{" "}
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic -navbabr-nav">
          <Nav className="ms-auto">
            <Nav.Link className={darkMode ? "text-dark-primary" : "text-light-primary"}
            onClick={()=> setDarkMode(!darkMode)}>
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link to='/cart' className={`${darkMode ? "text-dark-primary" : "text-light-primary"} d-flex align-items-center`}>
                <BiCart size='2rem'/>
                <span>Cart</span>
            </Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
