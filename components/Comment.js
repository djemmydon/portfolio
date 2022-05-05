import React from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";
import { LineAbout, AboutText, Header } from "./About";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

function Comment() {

  return (
    <div className="container mb-20 m-5 ">
      <Header>
        <AboutText sizes>Testimonial </AboutText>
        <LineAbout></LineAbout>
      </Header>

      <Swiper
       breakpoints={
        {
          500: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
         
          1000: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }

       }
      
        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <GridItem>
            <p>
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>


            <img src="/images/user1.jpg" alt="" />
              <span>Nicholas Emmanuel</span>
            </GridItem>
        </SwiperSlide>
        <SwiperSlide>
          <GridItem>
            <p>
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>


            <img src="/images/user2.jpg" alt="" />
              <span>Nicholas Emmanuel</span>
            </GridItem>
        </SwiperSlide>
        <SwiperSlide>
          <GridItem>
            <p>
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>


            <img src="/images/user3.jpg" alt="" />
              <span>Nicholas Emmanuel</span>
            </GridItem>
        </SwiperSlide>
        <SwiperSlide>
          <GridItem>
            <p>
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>


            <img src="/images/user1.jpg" alt="" />
              <span>Nicholas Emmanuel</span>
            </GridItem>
        </SwiperSlide>
        <SwiperSlide>
          <GridItem>
            <img src="/icon/javascript.png" alt="Peculiar project" />
            <p>Javascript</p>
          </GridItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Comment;
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
  min-width: 100%;
  max-height: 300px;

  justify-content: center !important;
  align-items: center !important;
  box-shadow: 1px 7px 7px 1px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 1px 7px 7px 1px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 1px 7px 7px 1px rgba(0, 0, 0, 0.55);
  height: 300px;

  padding: 20px;
  margin-bottom: 5rem;
  border-radius: 8px;
  text-align: center;
  p {
    font-size: 2rem;
    padding-top: 10px;
  }

  span {
    font-size: 1.5rem;
    color: #ff0066;
    font-weight: 500;

  }

  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 300px;
    object-fit: cover;

    @media (max-width: 700px) {
      padding-left: 10px;
    }

    img {
      height: 150px;
      animation: ${rotate} 1s linear infinite alternate;

      @media (max-width: 700px) {
        height: 50px;
  max-width: 100%;

  max-height: 100%;

      }
    }
  }
`;

const TextSide = styled.div`
  box-shadow: 1px 7px 7px 1px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 1px 7px 7px 1px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 1px 7px 7px 1px rgba(0, 0, 0, 0.55);
  max-height: 300px;

  padding: 20px;
  margin-bottom: 5rem;
  border-radius: 8px;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 300px;
    object-fit: cover;
  }
`;
