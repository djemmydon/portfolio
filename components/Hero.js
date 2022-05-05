import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <>
      <Container>
        <TextSide>
          <BigName>Patrick Chukwuemeka</BigName>
          <Work>I am Freelancer</Work>
        </TextSide>
      </Container>
    </>
  );
}

export default Hero;

// This is my style part

const Container = styled.div`
  background-image: url(/hero-bg.jpg),
    linear-gradient(rgba(255, 255, 255, 0.664), rgba(255, 255, 255, 0.664));
  max-width: 100%;
  max-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background-blend-mode: overlay;
  background-attachment: fixed;
`;

const TextSide = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20rem;

  @media (max-width: 700px) {
    padding-left: 0rem;
    text-align: center;
  }
`;
const BigName = styled.h3`
  font-size: 5rem;
  margin: 5px 0px;
  font-weight: 700;

  @media (max-width: 700px) {
  font-size: 3rem;
  text-align: center;
   
  }
`;

const Work = styled.p`
  font-size: 2rem;
  margin: 10px 0px;
`;
