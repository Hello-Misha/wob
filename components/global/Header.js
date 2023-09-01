"use client";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import classes from "./Header.module.scss";

import BtnComponent from "../ui/BtnComponent";

import logo from "../../public/img/Logo-WoB.png";

const Header = () => {
  const { t } = useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Check if window is defined before adding the event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // Check if window is defined before removing the event listener
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
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
      text: "header.links.about",
    },
    {
      href: "/",
      text: "header.links.membership",
    },
    {
      href: "/",
      text: "header.links.hc",
    },
    {
      href: "/",
      text: "header.links.contacts",
    },
  ];

  return (
    <header className={`relative ${classes.header}`}>
      <Container className="mx-2">
        <div
          className={`relative d-flex justify-content-between my-3 ${
            size.width < 992 ? " align-items-start" : " align-items-center"
          }`}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className={` ${
                size.width < 992 && menuOpen ? "static" : "absolute"
              }`}
              width={75}
              height={75}
            />
          </Link>

          <div
            className={`${classes.navbar} ${
              size.width < 992 && menuOpen ? "" : classes.hidden
            }`}
          >
            <nav className={classes.navbar__container}>
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <p
                    className={`text white mb-0 mx-2 `}
                    onClick={menuToggleHandler}
                  >
                    {t(link.text)}
                  </p>
                </Link>
              ))}
            </nav>
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
              <AiOutlineClose onClick={menuToggleHandler} />
            ) : (
              <BiMenu onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
