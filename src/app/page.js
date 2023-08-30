"use client";
// import Image from 'next/image'
import { Container, Row } from "react-bootstrap";
import BtnComponent from "@/components/ui/BtnComponent";

export default function Home() {
  return (
    <Container className="mt-5">
      <h1>Hello World it is a home page</h1>
      <BtnComponent
        link={"#"}
        text="test button"
        bg="bg-lipstick"
        color="white"
      />
    </Container>
  );
}
