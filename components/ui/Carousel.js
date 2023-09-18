import Image from "next/image";
import { Carousel } from "react-bootstrap";

import classes from "./#UI.module.scss";

const CarouselComponent = ({ imgArr }) => {
  return (
    <Carousel className={classes.carousel}>
      {imgArr.map((img, index) => (
        <Carousel.Item key={index}>
          <Image
            className="img-fluid d-block"
            src={img}
            placeholder="blur"
            width={1000}
            height={1000}
            alt="Slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
