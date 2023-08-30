"use client";
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import classes from "./Header.module.scss";

import BtnComponent from "@/components/ui/BtnComponent";

import logo from "@/img/Logo-WoB.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 992 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const navLinks = [
    {
      href: "/",
      text: "About",
    },
    {
      href: "/",
      text: "Membership",
    },
    {
      href: "/",
      text: "Honor Circle",
    },
    {
      href: "/",
      text: "Contacts",
    },
  ];

  return (
    <Navbar expand="lg" fixed="top" className="bg-lipstick">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={logo}
            alt="logo"
            className={`img-fluid`}
            width={75}
            height={75}
          />
        </Navbar.Brand>
        <div className={classes.menuControls}>
          {menuOpen ? (
            <BiMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
        <div
          // id="navbar"
          className={`${classes.navbar} ${
            menuOpen && size.width < 992 ? "hidden" : ""
          }`}
        >
          <div className={classes.navbar__container}>
            {navLinks.map((link, index) => (
              <Nav.Link key={index} href={link.href}>
                <p className={`text white mb-0 mx-2 `}>{link.text}</p>
              </Nav.Link>
            ))}
          </div>
          <div className={classes.navbar__container}>
            <BtnComponent
              link={"#"}
              text="Join Us"
              bg="bg-blue"
              color="white"
              classes={classes.navbar__container__btn}
              onClick={menuToggleHandler}
            />
            <BtnComponent
              link={"#"}
              text="Members Login"
              bg="bg-white"
              color="lipstick"
              onClick={menuToggleHandler}
            />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
