import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../components";
import bannerImg from "../assets/bannerImage.png";
import service1 from "../assets/option1.svg";
import service2 from "../assets/option2.svg";
import service3 from "../assets/option3.svg";
import { useGetMovieListQuery } from "../store/api/movieApi";
import { useNavigate } from "react-router-dom";

export const Landingpage = () => {
  const { data: getMovieList } = useGetMovieListQuery();
  const navigate = useNavigate()
  return (
    <Container>
      <Navbar />

      <BannerSection>
        <BannerImage src={bannerImg} />
      </BannerSection>
        <MoviesSelectionSection>
        <Title>Browse Movies</Title>
          <MovieList>
            {getMovieList?.data.slice(0, 6).map((item, index) => {
              console.log(item)
              return (
                <MovieDetails key={index}>
                    <MovieImg src={item.images[0]} />
                  <MovieTitle>{item.title}</MovieTitle>
                  <MovieDescription>{item.plot}</MovieDescription>
                  <ViewMoreButton onClick={()=>navigate('/booking', {state: item.id})} >View Movie</ViewMoreButton>
                </MovieDetails>
              );
            })}
          </MovieList>
        </MoviesSelectionSection>
      <ServivcesSection>
        <Title>TIX ID News</Title>
        <ServicesImgWrapper>
          <ImgWrapper>
            <ServicesImg src={service1} />
          </ImgWrapper>
          <ImgWrapper>
            <ServicesImg src={service2} />
          </ImgWrapper>
          <ImgWrapper>
            <ServicesImg src={service3} />
          </ImgWrapper>
        </ServicesImgWrapper>
      </ServivcesSection>
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: "Roboto";
`;
const BannerSection = styled.section`
   
`;
const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;
const ServivcesSection = styled.section`
  padding: 40px 24px 80px;
  max-width: 1200px;
  margin: auto;

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: auto;
  }
  @media (min-width: 768px) {
    padding: 40px 24px 40px
  }
  
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #333333;
`;
const ServicesImgWrapper = styled.div`
  display: flex;
  column-gap: 40px;
`;
const ImgWrapper = styled.div`
  margin: 40px 0;
  border-radius: 30px;
`;
const ServicesImg = styled.img`
  width: 100%;
  height: 100%;
`;
const MoviesSelectionSection = styled.section`
  padding: 40px 24px 80px;
  max-width: 1200px;
  margin: auto;
  @media (min-width: 768px) {
    padding: 40px 24px 40px
  }
`;

const MovieList = styled.div`
  display: flex;
  column-gap: 40px;
  flex-wrap: wrap;
  margin: auto;

    @media (max-width: 768px) {
    justify-content: center
  }
`;
const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  justify-content: center;
  max-width: calc(30.3% - 10px );
  margin: 20px 0;
  
  @media (max-width: 768px) {
    max-width: calc(45% - 10px );
  }
  @media (max-width: 500px) {
    max-width: calc(100% - 30px );
  }
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;

`;
const MovieDescription = styled.p`
    font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  text-align: center;
  color: #333333;
  height: 115px;
  overflow: hidden;
`
const MovieTitle = styled.h6`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 38px;
  text-align: center;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 20px;
  line-height: 24px;
  }
`;
const ViewMoreButton = styled.button`
  border: none;
  padding: 12px 8px;
  gap: 12px;
  width: 101px;
  height: 40px;
  background: #1a2c50;
  border-radius: 5.06667px;
  color: #f2c46f;
`;
