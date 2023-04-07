import { useState } from "react";
import styled from "styled-components";
import { useBookMovieTicketMutation } from "../store/api/movieApi";
import { showErrorToast, showSuccessToast } from "../util";

export const ViewTicketDetailsModal = ({ closeModal, movieId, payload }) => {
  const [bookTicket, {isLoading}] = useBookMovieTicketMutation();
  const [userDetails, setUserDetails] = useState({ email: "", phoneNumber: "" });
  const handleChange = (name, value) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    const values = {
      movieId: movieId,
      numberOfTicket: payload.ticketQuantity,
      selectedDate: payload.dateCard,
      selectedTime: payload.timeCard,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
    };
    bookTicket(values)
      .unwrap()
      .then((result) => {
        showSuccessToast(result.message);
        closeModal()
      })
      .catch((err) => {
        showErrorToast(err?.message[0]);
      });
  };
  return (
    <Wrapper>
      <Container>
        <Heading>Confirm Your Movie Reservation</Heading>
        <Row>
          <TextKey>Date Booked</TextKey>
          <TextValues>{payload.dateCard}</TextValues>
        </Row>
        <Row>
          <TextKey>Time Booked</TextKey>
          <TextValues>{payload.timeCard}</TextValues>
        </Row>
        <Row>
          <TextKey> Number Of Tickets</TextKey>
          <TextValues>{payload.ticketQuantity}</TextValues>
        </Row>
        <Row>
          <TextKey>Price</TextKey>
          <TextValues>{payload.ticketQuantity * 4000}</TextValues>
        </Row>
        <Row>
          <TextKey>Email</TextKey>
          <Input
            placeholder="enter email"
            onChange={(e) => handleChange("email", e.target.value)}
            value={userDetails.email}
          />
        </Row>
        <Row>
          <TextKey>Phone</TextKey>
          <Input
            placeholder="enter phonenumber"
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            value={userDetails.phoneNumber}
          />
        </Row>
        <ButtonContainer>
          <SubmitButton onClick={() => handleSubmit()}>{isLoading? 'Loading ...' : 'Submit'}</SubmitButton>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(232, 236, 244, 0.7);
`;
const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1;
  max-width: 424px;
  min-height: 441px;
  height: fit-content;
  flex-direction: column;
  border-radius: 12px;
  padding: 32px 65px;
  margin-top: 30px;
  max-height: 600px;
  row-gap: 20px;
`;
const Heading = styled.h4``;
const Row = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: s */
`;
const TextKey = styled.p`
  flex: 1;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #333333;
`;
const TextValues = styled.p`
  flex: 2;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #333333;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 30px;
`;

const SubmitButton = styled.div`
  border: none;
  padding: 12px 8px;
  gap: 12px;
  width: 101px;
  height: 20px;
  text-align: center;
  background: #1a2c50;
  border-radius: 5.06667px;
  color: #f2c46f;
`;
const CancelButton = styled(SubmitButton)`
  background-color: red;
  color: white;
`;
const Input = styled.input`
  width: 100px;
  height: 40px;
  border: 1px solid #9da8be;
  border-radius: 4px;
  outline: none;
  padding: 2px 10px;
  background-color: #ffffff;
  color: #333333;
  flex: 3;
`;
