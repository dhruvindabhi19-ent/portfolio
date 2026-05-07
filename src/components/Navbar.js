import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { GiKitchenTap } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import logo from "../Assets/logo.png";

import { MdPlumbing } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* <Navbar.Brand href="https://distributors.leotaps.com/leo-taps-fittings/dealers-in-ahmedabad/dealers-in-Sarkhej/leo-taps-and-fittings-shri-adhik-agencies-in-Sarkhej-ahmedabad--3CoX8a/home" target="_blank">
          <MdDeveloperMode style={{ marginBottom: "2px" }} /> shri adhik agency
        </Navbar.Brand> */}
        <Navbar.Brand
          href="https://distributors.leotaps.com/leo-taps-fittings/dealers-in-ahmedabad/dealers-in-Sarkhej/leo-taps-and-fittings-shri-adhik-agencies-in-Sarkhej-ahmedabad--3CoX8a/home"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >

          <img
            src={logo}
            style={{ height: "28px" }}
          />

          <span>Shri Adhik Agency</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/brands"
                onClick={() => updateExpanded(false)}
              >
                <GiKitchenTap style={{ marginBottom: "2px" }} /> Brands
              </Nav.Link>
            </Nav.Item>

             <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <IoMdContacts style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://distributors.leotaps.com/leo-taps-fittings/dealers-in-ahmedabad/dealers-in-Sarkhej/leo-taps-and-fittings-shri-adhik-agencies-in-Sarkhej-ahmedabad--3CoX8a/home"
                target="_blank"
                rel="noreferrer"
              >
                <IoMdContacts style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
