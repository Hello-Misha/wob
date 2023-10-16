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
import { useFetchUser } from "../../services/authContext";
const Header = () => {
  const { user, loading } = useFetchUser();
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

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
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
      href: "/mission",
      text: "links.about",
    },
    {
      href: "/membership",
      text: "links.membership",
    },
    {
      href: "/honor_circle",
      text: "links.hc",
    },
    {
      href: "/contacts",
      text: "links.contacts",
    },
  ];

  return (
    <header className={`${classes.header}`}>
      <Container className={classes.navbar__container}>
        <Link href="/">
          <Image src={logo} alt="logo" width={75} height={75} />
        </Link>

        <div className={`${classes.navbar} ${menuOpen ? "" : classes.hidden}`}>
          <nav className={classes.navbar__container__elements}>
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <p
                  className={`text text-center white mx-2 my-2 my-lg-0 `}
                  onClick={menuToggleHandler}
                >
                  {t(link.text)}
                </p>
              </Link>
            ))}
          </nav>
          <div className={classes.navbar__container__elements}>
            {/* LANG TOOGLER */}
            <div className="d-flex cursor-pointer">
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
              locale={"common"}
              link={"/membership"}
              btnText="btn.joinUs"
              bg="bg-blue"
              classes={classes.navbar__container__elements__btn}
              color="white"
              onClick={menuToggleHandler}
            />

            {user ? (
              <BtnComponent
                locale="common"
                link={"/auth"}
                btnText="btn.logout"
                classes=""
                bg="bg-white"
                color="lipstick"
                onClick={menuToggleHandler}
              />
            ) : (
              <BtnComponent
                locale="common"
                link={"/auth"}
                btnText="btn.login"
                classes=""
                bg="bg-white"
                color="lipstick"
                onClick={menuToggleHandler}
              />
            )}
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
