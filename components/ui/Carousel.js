import Image from "next/image";
import { Carousel } from "react-bootstrap";

const CarouselComponent = ({ imgArr }) => {
  return (
    <Carousel>
      {imgArr.map((img, index) => (
        <Carousel.Item key={index}>
          <Image
            className="img-fluid d-block "
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
