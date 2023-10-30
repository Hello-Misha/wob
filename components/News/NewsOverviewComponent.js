import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import NewsCard from "./NewsCard";

function TeamPage({ articles }) {
  const { t } = useTranslation("home");

  const filteredArr = articles.data.sort(
    (a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
  );

  return (
    <main>
      <Container className="mb-5 mt-5">
        <h2 className={`h1-title lipstick mb-5 text-center`}>
          {t("news.title")}
        </h2>
        <Row className="mb-3 d-flex justify-content-center">
          {articles &&
            filteredArr.map((article) => (
              <Col lg="12" md="12" key={article.id}>
                <NewsCard article={article} playback="big" />
              </Col>
            ))}
        </Row>
      </Container>
    </main>
  );
}

export default TeamPage;
