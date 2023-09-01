"use client";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import classes from "./Header.module.scss";
import { Container } from "react-bootstrap";

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
    if (size.width > 992) {
      setMenuOpen(true);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const test = () => {
    console.log(`menuOpen is: ${menuOpen}`);
    console.log(`size.width < 992 is ${size.width < 992}`);
  };

  /* LANG TOOGLER */
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const currentLocale = router.locale;
  const changeLanguage = (locale) => {
    router.push({ pathname, query }, asPath, {
      locale: locale,
    });
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
    <header className={`${classes.header}`}>
      <Container
        className={`d-flex justify-content-between my-3 mx-2 ${
          size.width < 992 ? " align-items-start" : " align-items-center"
        }`}
      >
        <Link href="/">
          <Image src={logo} alt="logo" width={75} height={75} onClick={test} />
        </Link>

        <div className={`${classes.navbar} ${menuOpen ? "" : classes.hidden}`}>
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
            {/* LANG TOOGLER */}
            <div className="d-flex">
              <h3
                className={`${
                  currentLocale === "uk" ? "text-bold" : "text"
                } white `}
                onClick={() => {
                  changeLanguage("uk");
                }}
              >
                UA
              </h3>
              <span className="text-bold white mx-2">|</span>
              <h3
                className={`${
                  currentLocale === "en" ? "text-bold" : "text"
                } white `}
                onClick={() => {
                  changeLanguage("en");
                }}
              >
                EN
              </h3>
            </div>

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
      </Container>
    </header>
  );
};

export default Header;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
