import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import icon from "../../public/img/icon-test.png";

import classes from "./#Home.module.scss";

const Icons = () => {
  const { t } = useTranslation("home");
  const iconsImg = [icon, icon, icon, icon, icon];
  return (
    <section className={`${classes.iconsContainer}`}>
      <Container>
        <Row>
          {t("icons", {
            returnObjects: true,
          }).map((icon, index) => (
            <Col
              key={index}
              className="d-flex flex-column align-items-center mx-3"
            >
              <Image
                src={iconsImg[index]}
                alt={icon}
                width={80}
                placeholder="blur"
                className="mb-2"
              />
              <p className="text-italic text-center blue pb-3">{icon}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Icons;
