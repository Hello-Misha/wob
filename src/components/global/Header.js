"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Image from "next/image";

import BtnComponent from "@/components/ui/BtnComponent";

import logo from "@/img/Logo-WoB.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    if (expanded) {
      toggleNav(); // Close the navbar
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="bg-lipstick">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="logo" className={`img-fluid`} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar"
          onClick={toggleNav}
          className="white"
        />
        <Navbar.Collapse
          id="navbar"
          className={
            expanded
              ? "show d-flex flex-col justify-content-between"
              : "flex-row justify-content-between"
          }
        >
          <Nav
            className={
              expanded
                ? "d-flex flex-col justify-content-center align-items-center my-5"
                : "d-flex flex-row"
            }
          >
            <Nav.Link href="#home">
              <p className="text white mb-0" onClick={handleNavLinkClick}>
                About
              </p>
            </Nav.Link>
            <Nav.Link href="#about">
              <p className="text white" onClick={handleNavLinkClick}>
                Membership
              </p>
            </Nav.Link>
            <Nav.Link href="#services">
              <p className="text white" onClick={handleNavLinkClick}>
                Honor Circle
              </p>
            </Nav.Link>
            <Nav.Link href="#contact">
              <p className="text white" onClick={handleNavLinkClick}>
                Contacts
              </p>
            </Nav.Link>
          </Nav>
          <div
            className={
              expanded
                ? "d-flex flex-col justify-content-center align-items-center my-5"
                : "d-flex flex-row"
            }
          >
            <BtnComponent
              link={"#"}
              text="Join Us"
              bg="bg-blue"
              color="white"
              classes={expanded ? "my-3" : "mx-3"}
              onClick={handleNavLinkClick}
            />
            <BtnComponent
              link={"#"}
              text="Members Login"
              bg="bg-white"
              color="lipstick"
              onClick={handleNavLinkClick}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
