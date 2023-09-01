"use client";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import classes from "./Header.module.scss";

import BtnComponent from "../ui/BtnComponent";

import logo from "../../public/img/Logo-WoB.png";

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
    <header className={classes.header}>
      <Container
        className={`d-flex justify-content-between my-3 ${
          size.width < 992 ? "align-items-start" : "align-items-center"
        }`}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            // className={`img-fluid`}
            width={75}
            height={75}
          />
        </Link>

        <div
          className={`${classes.navbar} ${
            menuOpen && size.width < 992 ? "hidden" : ""
          }`}
        >
          <div className={classes.navbar__container}>
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <p className={`text white mb-0 mx-2 `}>{link.text}</p>
              </Link>
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
        <div className={`${classes.menuControls}`}>
          {menuOpen ? (
            <BiMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
