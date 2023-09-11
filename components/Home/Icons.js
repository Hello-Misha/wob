import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

//icons
import icon1 from "../../public/img/home/Icon-1.png";
import icon2 from "../../public/img/home/Icon-2.png";
import icon3 from "../../public/img/home/Icon-3.png";
import icon4 from "../../public/img/home/Icon-4.png";
import icon5 from "../../public/img/home/Icon-5.png";

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
