import React from "react";
import styled from "styled-components";
import { LineAbout, AboutText, Header } from "./About";

function Project() {
  return (
    <Container className="container ">
      <Header>
        <AboutText sizes>Projects </AboutText>
        <LineAbout></LineAbout>
      </Header>
      <Grid>
        <GridItem>
          <Image src="/images/pro1.png" alt="" />
        </GridItem>
        <GridItem>
          <Image src="/images/pro2.png" alt="" />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Project;

const Container = styled.div``;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
max-width: 100%;
margin: 20px;
`;

const Image = styled.img`
  width: 400px;
  height: 200px;
  object-fit: cover;

  @media (max-width: 500px) {
    width: 250px;
    height: 150px;
  }
`;




