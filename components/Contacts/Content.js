import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../ui/Title";

import Link from "next/link";
import { motion } from "framer-motion";

import { IconContext } from "react-icons";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Content = () => {
  const { t } = useTranslation("contacts");
  return (
    <section className="my-5">
      <Container>
        <Row className="mb-5">
          <Title locale="contacts" text="title" hr={true} />
        </Row>
        <Row className="mb-5">
          <Col xs="12" md="6">
            <h4 className="h4-title blue">{t("text")}</h4>
          </Col>
          <Col xs="12" md="6">
            {/* EMAIL */}
            <div className="d-flex mb-4 align-items-center">
              <IconContext.Provider
                value={{
                  color: "981b46",
                  size: "3rem",
                }}
              >
                <AiOutlineMail className="ml-5" />
              </IconContext.Provider>
              <p className="text blue ml-5">office@wob.com.ua</p>
            </div>
            {/* PHONE */}
            <div className="d-flex mb-4 align-items-center">
              <IconContext.Provider
                value={{
                  color: "981b46",
                  size: "3rem",
                }}
              >
                <AiOutlinePhone className="ml-5" />
              </IconContext.Provider>

              <p className="text blue ml-5">+38 050 800 13 45</p>
            </div>
            {/* SOCIALS */}
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
                    color: "981b46",
                    size: "3rem",
                  }}
                >
                  <AiOutlineLinkedin className="ml-5" />
                </IconContext.Provider>
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;