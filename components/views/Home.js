import { Container, Row, Col } from "react-bootstrap";

import Hero from "../Home/Hero";
import Icons from "../Home/Icons";
import Mission from "../Home/Mission";

const Home = () => {
  return (
    <main>
      <Hero />
      <Icons />
      <Mission />
    </main>
  );
};

export default Home;
