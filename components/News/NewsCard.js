import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ article, playback }) => {
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
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 1 }}
    >
      <Link href={`/articles/` + article.attributes.slug}>
        <section>
          <Container className="mb-5 ">
            <Row>
              <Col md={view.img.md} lg={view.img.lg} className="section-flex">
                <Image
                  src={article.attributes.mainImg.data.attributes.url}
                  className={`img-fluid mb-3`}
                  width={article.attributes.mainImg.data.attributes.width}
                  height={article.attributes.mainImg.data.attributes.height}
                  alt=""
                  // alt={article.attributes.mainImgAlt}
                  // placeholder="blur"
                />
              </Col>
              <Col md={view.text.md} lg={view.text.lg}>
                <h3 className="h3-title lipstick mb-2">
                  {article.attributes.titleArticle}
                </h3>
                <h4 className="text-bold  lipstick mb-2">
                  {article.attributes.date}
                </h4>
                <hr />
                <p className="text blue my-3">{article.attributes.spoiler}</p>
              </Col>
            </Row>
          </Container>
        </section>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
