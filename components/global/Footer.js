import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import BtnComponent from "../ui/BtnComponent";
import logo from "../../public/img/Logo-WoB.png";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-lipstick mt-5">
      <Container className="mx-auto h-96 py-5">
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
              link={"#"}
              btnText="header.btn.joinUs"
              bg="bg-blue"
              classes={"mb-5"}
              color="white"
            />
            <BtnComponent
              locale="common"
              link={"#"}
              btnText="header.btn.login"
              bg="bg-white"
              classes={"mb-5"}
              color="lipstick"
            />
          </Col>
          <Col xs="6" md="3">
            {t("footer", { returnObjects: true }).map((item, index) => (
              <p key={index} className={`text white my-3`}>
                {t(item)}
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
