import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { Container, Row, Col } from "react-bootstrap";
import BtnComponent from "../ui/BtnComponent";
import logo from "../../public/img/Logo-WoB.png";

const Footer = () => {
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
  // const navLinks = ["/mission", "/membership", "/honor_circle", "/contacts"];
  const { t } = useTranslation("common");
  return (
    <footer className="bg-lipstick mt-5">
      <Container className="mx-auto py-5">
        <Row>
          <Col xs="6" md="4">
            <Link href="/" className="mb-5">
              <Image
                src={logo}
                alt="logo"
                width={75}
                height={75}
                className="mb-5"
              />
            </Link>
            <BtnComponent
              locale={"common"}
              link={"/membership"}
              btnText="btn.joinUs"
              bg="bg-blue"
              classes={"mb-5"}
              color="white"
            />
            <BtnComponent
              locale="common"
              link={"/auth"}
              btnText="btn.login"
              bg="bg-white"
              classes={"mb-5"}
              color="lipstick"
            />
          </Col>
          <Col xs="6" md="3">
            {navLinks.map((item, index) => (
              <Link key={index} href={item.href}>
                <p className={`text white my-3`}>{t(item.text)}</p>
              </Link>
            ))}
          </Col>
          <Col xs="12" md="5">
            {/* EMAIL */}
            <div className="d-flex mb-4 align-items-center">
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "3rem",
                }}
              >
                <AiOutlineMail className="ml-5" />
              </IconContext.Provider>
              <p className="text white ml-5">office@wob.com.ua</p>
            </div>
            {/* PHONE */}
            <div className="d-flex mb-4 align-items-center">
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "3rem",
                }}
              >
                <AiOutlinePhone className="ml-5" />
              </IconContext.Provider>

              <p className="text white ml-5">+38 050 800 13 45</p>
            </div>
            {/* SOCIALS */}
            <div className="d-flex mb-4 align-items-center">
              <motion.div
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 1 }}
              >
                <Link
                  href="https://www.linkedin.com/company/women-on-boards-ukraine"
                  target="_blank"
                >
                  <IconContext.Provider
                    value={{
                      color: "white",
                      size: "3rem",
                    }}
                  >
                    <AiOutlineLinkedin className="ml-5" />
                  </IconContext.Provider>
                </Link>
              </motion.div>
              <p className="text white ml-5">Women on Boards Ukraine</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
