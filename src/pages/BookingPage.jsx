import React, { useState } from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../components";
import star from "../assets/star.svg";
import { ViewTicketDetailsModal } from "./ViewTicketDetailModal";
import { useLocation } from "react-router-dom";
import { useGetSingleMovieQuery } from "../store/api/movieApi";
import { showErrorToast } from "../util";

export const BookingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { state: id } = useLocation();

  const [payload, setPayload] = useState({
    dateCard: "",
    timeCard: "",
    ticketQuantity: 1,
  });
  const handleChange = (name, value) => {
    setPayload((prev) => ({ ...prev, [name]: value }));
  };
  const { data: getMovie } = useGetSingleMovieQuery(id);
  const availableDates = ["10 Jan", "14 Jan", "18 Jan", "28 Jan", "04 Feb"];
  const availableTimes = ["10: 30", "02: 15", "15: 45", "17: 00", "16: 00"];

  const handleShowModal = () => {
    if (payload.dateCard === "" || payload.timeCard === "" ) {
      showErrorToast('select date and time');
      return
    }
    else if (payload.ticketQuantity < 1) {
      showErrorToast('select valid quantity');
      return
    }
    setShowModal(true)
  }

  return (
    <Container>
      <Navbar />
      <BookingWrapper>
        <LabelHeading>Freeway Cinema</LabelHeading>
        <BookingContainer>
          <FormSection>
            <ActivitySection>
              <HeadingRow>
                <StarIcon src={star} />
                <LabelSubheading>Select Preferred Movie Date</LabelSubheading>
              </HeadingRow>
              <TimeCardContainer>
                {availableDates.map((availableDate, index) => {
                  return (
                    <TimeCard
                      key={index}
                      isSelected={payload.dateCard === availableDate}
                      onClick={() => handleChange("dateCard", availableDate)}
                    >
                      <CardText>{availableDate}</CardText>
                    </TimeCard>
                  );
                })}
              </TimeCardContainer>
            </ActivitySection>
            <ActivitySection>
              <HeadingRow>
                <StarIcon src={star} />
                <LabelSubheading>Select Preferred Movie Time</LabelSubheading>
              </HeadingRow>
              <TimeCardContainer>
                {availableTimes.map((availableTime, index) => {
                  return (
                    <TimeCard
                      key={index}
                      isSelected={payload.timeCard === availableTime}
                      onClick={() => handleChange("timeCard", availableTime)}
                    >
                      <CardText>{availableTime}</CardText>
                    </TimeCard>
                  );
                })}
              </TimeCardContainer>
            </ActivitySection>
            <ActivitySection>
              <HeadingRow>
                <StarIcon src={star} />
                <LabelSubheading>Select Number of Tickets</LabelSubheading>
              </HeadingRow>
              <TimeCardContainer>
                <InputCard
                  min={1}
                  onChange={(e) =>
                    handleChange("ticketQuantity", e.target.value)
                  }
                  value={payload.ticketQuantity}
                  type={"number"}
                />
              </TimeCardContainer>
            </ActivitySection>
            <ActivitySection>
              <HeadingRow>
                <StarIcon src={star} />
                <LabelSubheading>Price</LabelSubheading>
              </HeadingRow>
              <PriceCard>
                <CardText>{4000 * payload.ticketQuantity}</CardText>
              </PriceCard>
            </ActivitySection>
            <Button onClick={handleShowModal}>Continue</Button>
          </FormSection>
          <ViewingDetailsSection>
            <MovieDetails>
                <MoviePoster src={getMovie?.data?.images[0]} />
              <MovieDetailsContainer>
                <MovieTitle>{getMovie?.data?.title}</MovieTitle>
                <MovieDetailsRow>
                  <MovieDetailsKey>Genre :</MovieDetailsKey>
                  <MovieDetailsValue>{getMovie?.data?.genre}</MovieDetailsValue>
                </MovieDetailsRow>
                <MovieDetailsRow>
                  <MovieDetailsKey>Country :</MovieDetailsKey>
                  <MovieDetailsValue>{getMovie?.data.country}</MovieDetailsValue>
                </MovieDetailsRow>
                <MovieDetailsRow>
                  <MovieDetailsKey>Director:</MovieDetailsKey>
                  <MovieDetailsValue>{getMovie?.data.director}</MovieDetailsValue>
                </MovieDetailsRow>
                <MovieDetailsRow>
                  <MovieDetailsKey>Year :</MovieDetailsKey>
                  <MovieDetailsValue>{getMovie?.data.year}</MovieDetailsValue>
                </MovieDetailsRow>
              </MovieDetailsContainer>
            </MovieDetails>
          </ViewingDetailsSection>
        </BookingContainer>
      </BookingWrapper>
      <Footer />
      {showModal && (
        <ViewTicketDetailsModal
          payload={payload}
          movieId={id}
          closeModal={() => setShowModal(false)}
        />
      )}
    </Container>
  );
};

const Container = styled.main``;
const BookingWrapper = styled.section`
  padding: 20px 50px;
  max-width: 1100px;
  margin: 90px auto;

  @media (max-width: 1210px) {
    max-width: 800px;
    margin: auto;
  }
  @media (max-width: 1000px) {
    max-width: 600px;
    margin: auto;
  }
  `;
const BookingContainer = styled.section`
  display: flex;
  column-gap: 100px;
  margin-top: 40px;
  
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  column-gap: 10px;
`;
const StarIcon = styled.img`
  width: 20px;
`;
const FormSection = styled.div``;
const ViewingDetailsSection = styled.div``;
const ActivitySection = styled.div`
  margin: 30px auto;
`;
const LabelHeading = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #333333;
`;
const LabelSubheading = styled.h5`
  color: #5a637a;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;
const TimeCardContainer = styled.div`
  display: flex;
  column-gap: 18px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    row-gap: 20px
  }
`;
const TimeCard = styled.div`
  width: 77px;
  height: 40px;
  border: 1px solid #9da8be;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? "#1A2C50" : "#ffffff")};
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#333333")};
`;
const MovieDetailsContainer = styled.div``
const InputCard = styled.input`
  width: 77px;
  height: 40px;
  border: 1px solid #9da8be;
  border-radius: 4px;
  outline: none;
  padding: 2px 10px;
  background-color: #ffffff;
  color: #333333;

  @media (max-width: 500px) {
    flex: 1
  }
`;
const CardText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;
const MovieDetails = styled.div`
  
  @media (max-width: 768px) {
    display: flex;
    column-gap: 30px
  }
  @media (max-width: 500px) {
    display: block;
    column-gap: unset
  }
`;
const MoviePoster = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  object-fit: cover;
`;
const MovieTitle = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
  margin: 10px auto;
`;

const MovieDetailsRow = styled.div`
  display: flex;
  margin: 5px 0;
`;
const MovieDetailsKey = styled.h5`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
  flex: 0.3;

  @media (max-width: 768px) {
    flex: 0.7
  }
`;
const MovieDetailsValue = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
  flex: 1;
`;

const Button = styled.button`
  border: none;
  padding: 12px 8px;
  gap: 12px;
  width: 170px;
  height: 40px;
  background: #1a2c50;
  border-radius: 5.06667px;
  color: #f2c46f;
  margin: 30px 0;

  @media (max-width: 500px) {
    width: 100%
  }
`;
const PriceCard = styled(TimeCard)`
   @media (max-width: 500px) {
    width: 100%
  }
`