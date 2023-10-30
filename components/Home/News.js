import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Link from "next/link";

import NewsCard from "../News/NewsCard";

import BtnComponent from "../ui/BtnComponent";

function NewsHomePage({ articles }) {
  const { t } = useTranslation("home");

  return (
    <section className={`mt-5 mb-5 section-flex`}>
      <Container>
        <Row>
          <Col lg="12">
            <h2 className={`h1-title lipstick mb-5 text-center	`}>
              {t("news.title")}{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mb-3 ">
          {articles &&
            articles.data.map((article) => {
              return (
                <Col lg="6" md="6" key={article.id}>
                  <NewsCard article={article} />
                </Col>
              );
            })}
        </Row>
        <Row className="mt-3 d-flex justify-content-center">
          <Col sm="10" md="4" className="d-flex justify-content-center">
            <BtnComponent
              locale={"home"}
              link={"/articles"}
              btnText="news.btn"
              bg="bg-lipstick"
              classes=""
              color="white"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewsHomePage;
