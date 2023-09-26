import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";


import icon1 from "../../public/img/icons/i2.svg";
import icon2 from "../../public/img/icons/i3.svg";
import icon3 from "../../public/img/icons/i4.svg";
import icon4 from "../../public/img/icons/i5.svg";
import icon5 from "../../public/img/icons/i1.svg";

import classes from "./#Home.module.scss";

const Icons = () => {
  const { t } = useTranslation("home");
  const iconsImg = [icon1, icon2, icon3, icon4, icon5];
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
