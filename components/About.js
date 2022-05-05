import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ProfileImage from "../assets/profile-img.jpg";

function About({ color, size }) {
  return (
    <Container className="container">
      <Header>
        <AboutText sizes>About </AboutText>
        <LineAbout></LineAbout>
      </Header>

      <TextText>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </TextText>

      <Grid className="row">
        <ImageSide className="col-md-4">
          <Image src={ProfileImage} width={500} height={500} />
        </ImageSide>

        <TextSide className="col-md-8">
          <AboutText colors>A Web Designer and Developer</AboutText>


          <GridAboutMe>
          <AboutContent>
            <AboutMeText>
              <span>Birthday: </span>
              <span>12th December 2000</span>
            </AboutMeText>
            <AboutMeText>
              <span>Website: </span>
              <span>www.emeka.com</span>
            </AboutMeText>
            <AboutMeText>
              <span>City: </span>
              <span>Ibadan, Nigeria</span>
            </AboutMeText>
          </AboutContent>


          <AboutContent>
            <AboutMeText>
              <span>Age: </span>
              <span>21</span>
            </AboutMeText>
            <AboutMeText>
              <span>Email: </span>
              <span>okinpatrick0@gmail.com</span>
            </AboutMeText>
            <AboutMeText>
              <span>Freelance: </span>
              <span>Available</span>
            </AboutMeText>
          </AboutContent>
        </GridAboutMe>
        </TextSide>

      
      </Grid>

      <AboutMe></AboutMe>
    </Container>
  );
}

export default About;

const Container = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const AboutText = styled.h5`
  font-size: ${(props) => (props.sizes ? "5rem" : "3rem")};
  color: ${(props) => (props.color ? "grey" : "black")};
`;

export const LineAbout = styled.div`
  background-color: #ff0066;
  height: 2px;
  width: 20px;
  position: relative;
  height: 2px;
  width: 120px;
  left: 0;
  top: 0;
`;

const TextText = styled.h5`
  font-size: 1.6rem;
  text-align: center;
`;

const Grid = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 900px) {
    flex-direction: column;
  }
`;
const ImageSide = styled.div`


`;
const TextSide = styled.div`


`;

const AboutMe = styled.div`
  display: flex;
`;

const AboutContent = styled.div`
margin-right: 10rem;
@media (max-width: 400px) {
  margin-right: 0rem;
  }

`
;
const AboutMeText = styled.p`

padding-top: 1rem;
font-size: 1.7rem;
font-weight: 500;
white-space:nowrap;


  &:before{
    content: ">";
    padding-right: 5px;
    color: #ff0066;
    

}

span:nth-child(2){
  font-weight: 400;
}

`;

const GridAboutMe = styled.div`
display: flex;
@media (max-width: 900px) {
    flex-direction: column;
  }

`;
