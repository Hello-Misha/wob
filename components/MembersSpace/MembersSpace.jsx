import Title from "components/ui/Title";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

import events from "public/img/icons/i9.svg";
import jobs from "public/img/icons/i10.svg";
import members from "public/img/icons/i11.svg";
import logout from "public/img/icons/i12.svg";

import office from "public/img/office.png";

const MembersSpace = () => {
  const { t } = useTranslation("members_space");

  const buttons = [
    {
      href: "/members",
      text: "members_space.members",
      img: members,
    },
    {
      href: "/events",
      text: "members_space.events",
      img: events,
    },
  ];

  return (
    <main>
      <section>
        <Container>
          <Row>
            <Col xs="12">
              <h1 className="h1-title lipstick">{t("members_space.title")}</h1>
              <hr />
              <p className="text blue my-3">{t("members_space.text")} </p>
            </Col>
          </Row>
          <Row className="d-flex justify-between">
            <Col xs="12" md="6" lg="4">
              {buttons.map((item, index) => (
                <Link href={item.href} key={index}>
                  <div
                    style={{
                      border: "3px solid #981b46", // Add a border with the desired color
                      color: "#981b46", // Set the text color to match the border color
                    }}
                    className="py-3 my-5 pl-5 rounded d-flex align-items-center hover:shadow-lg"
                  >
                    <Image src={item.img} alt="" />
                    <h3 className="text-bold blue ml-5">{t(item.text)}</h3>
                  </div>
                </Link>
              ))}
            </Col>
            <Col md="6" lg="5">
              <Image
                src={office}
                alt="office"
                className="img-fluid my-5 max-w-1/2 mx-auto"
              />
            </Col>
            <hr />
          </Row>
          <Row>
            <Col xs="12" md="6" lg="4">
              <Link href="/auth" className="d-flex align-items-center my-5">
                <h3 className="text-bold lipstick mr-5">
                  {t("members_space.logout")}
                </h3>
                <Image src={logout} alt="" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default MembersSpace;
