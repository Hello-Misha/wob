import { useState } from "react";
import { useTranslation } from "next-i18next";
import Title from "../ui/Title";
import Tab from "../HonorCircle/Tabs";

import Members from "../HonorCircle/Members";
import Supporters from "../HonorCircle/Supporters";
import Partners from "../HonorCircle/Partners";

import { Container, Row, Col } from "react-bootstrap";

const HonorCircle = () => {
  const { t } = useTranslation("honorCircle");
  const [count, setCount] = useState(1);

  const handleTabClick = (newCount) => {
    setCount(newCount);
  };

  const componentProps = (num) => {
    return {
      classes: count === num ? "block" : "hidden",
    };
  };

  return (
    <main>
      <Row className="mb-5">
        <Title locale="honorCircle" text="main.title" hr={true} />
        <p className="text blue">{t("main.text")}</p>
      </Row>
      {/* TABS */}
      {/* <Container className="sticky-row mx-auto">
        <Row className="row gx-0 md:gx-2 justify-between">
          <Col xs="4" className="xs:gx-0 md:gx-3">
            <Tab
              index={1}
              text={"main.btn.members"}
              onClick={handleTabClick}
              count={count}
            />
          </Col>
          <Col xs="4" md="4" className="xs:gx-0 md:gx-3">
            <Tab
              index={2}
              text={"main.btn.supporters"}
              onClick={handleTabClick}
              count={count}
            />
          </Col>
          <Col xs="4" md="4" className="xs:gx-0 md:gx-3">
            <Tab
              index={3}
              text={"main.btn.partners"}
              onClick={handleTabClick}
              count={count}
            />
          </Col>
        </Row>
      </Container> */}
      <Members />
      {/* <Members {...componentProps(1)} /> */}
      {/* <Supporters {...componentProps(2)} /> */}
      {/* <Partners {...componentProps(3)} /> */}
    </main>
  );
};

export default HonorCircle;
