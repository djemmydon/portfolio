import React from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";
import { LineAbout, AboutText, Header } from "./About";

function Skills() {
  return (
    <div className="container mt-20">
      <Header>
        <AboutText sizes>Skills </AboutText>
        <LineAbout></LineAbout>
      </Header>

      <Grid>
        <GridItem>
          <img src="/icon/html.png" alt="Peculiar project" />
          <p>Html</p>
        </GridItem>

        <GridItem>
          <img src="/icon/css.png" alt="Peculiar project" />
          <p>css</p>
        </GridItem>

        <GridItem>
          <img src="/icon/sass.png" alt="Peculiar project" />
          <p>Sass</p>
        </GridItem>

        <GridItem>
          <img src="/icon/javascript.png" alt="Peculiar project" />
          <p>Javascript</p>
        </GridItem>

        <GridItem>
          <img src="/icon/react.png" alt="Peculiar project" />
          <p>React.js</p>
        </GridItem>

        <GridItem>
          <img src="/icon/nextjs_icon.png" alt="Peculiar project" />
          <p>Next.js</p>
        </GridItem>

        <GridItem>
          <img src="/icon/ps.png" alt="Peculiar project" />
          <p>PhotoShop</p>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Skills;
const rotate = keyframes`
  from {
 transform:scale(.9)
  }

  to {
    transform:scale(1)


  }
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 100px;
  justify-content: center;
`;

const GridItem = styled.div`
  padding-left: 50px;
  padding-bottom: 50px;
  text-align: center;

  @media (max-width: 700px) {
    padding-left: 10px;
  }

  img {
    height: 150px;
    animation: ${rotate} 1s linear infinite alternate;

    @media (max-width: 700px) {
      height: 50px;
    }
  }

  p {
    font-size: 2rem;
    padding-top: 10px;
  }
`;
