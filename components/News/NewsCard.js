import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ article, playback }) => {
  const mainImg =
    process.env.NEXT_PUBLIC_STRAPI_URL2 +
    articles.attributes.mainImg.data.attributes.url;
  let view = {
    img: {
      md: "4",
      lg: "4",
    },
    text: {
      md: "8",
      lg: "8",
    },
  };

  if (playback === "big") {
    (view.img.md = "3"),
      (view.img.lg = "3"),
      (view.text.md = "9"),
      (view.text.lg = "9");
  }

  return (
    <Link href={`/article/` + article.attributes.slug}>
      <section>
        <Container className="mb-5 ">
          <Row>
            <Col md={view.img.md} lg={view.img.lg} className="section-flex">
              <Image
                src={mainImg}
                className={`img-fluid mb-3`}
                width={article.attributes.mainImg.data.attributes.width}
                height={article.attributes.mainImg.data.attributes.height}
                alt=""
                // alt={tiding.attributes.mainImgAlt}
                // placeholder="blur"
              />
            </Col>
            <Col md={view.text.md} lg={view.text.lg}>
              <h3 className="Sub-Title-bold  DarkBlue mb-2">
                {article.attributes.title}
              </h3>
              <h4 className="Text-bold  DarkBlue mb-2">
                {article.attributes.date}
              </h4>
              <hr />
              <p className="Text DarkBlue mb-3">
                {article.attributes.description}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Link>
  );
};

export default NewsCard;
