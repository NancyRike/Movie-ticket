import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterSubMenu>
          <FooterSubMenu1>
            <LogoSection>
              <LogoImage src={logo} />
            </LogoSection>
            <FooterInput />
            <FooterInput />
            <Button>BOOK</Button>
          </FooterSubMenu1>
          <FooterSubMenu2>
            <TitleText>About</TitleText>
            <FooterText>About Us</FooterText>
            <FooterText>Terms and Condition</FooterText>
            <FooterText>Carrers</FooterText>
            <FooterText>About Us</FooterText>
            <FooterText>About Us</FooterText>
          </FooterSubMenu2>
          <FooterSubMenu2>
            <TitleText>Help and Support</TitleText>
            <FooterText>Refunds</FooterText>
            <FooterText>FInd Us</FooterText>
            <FooterText>Contact Us</FooterText>
            <FooterText>FAQs</FooterText>
            <FooterText>Health and Safety</FooterText>
          </FooterSubMenu2>
          <FooterSubMenu2>
            <TitleText>Explore our Site</TitleText>
            <FooterText>What's On</FooterText>
            <FooterText>Coming Soon</FooterText>
            <FooterText>Carrers</FooterText>
            <FooterText>About Us</FooterText>
            <FooterText>About Us</FooterText>
          </FooterSubMenu2>
        </FooterSubMenu>
      </FooterContainer>
      <CreatedBy>© 2023 NancyRike. All rights protected.</CreatedBy>
    </Container>
  );
};

const Container = styled.section`
  padding: 40px 84px 80px;
  border-top: 1px solid #bdc5d5;

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: auto;
  }
  @media (max-width: 768px) {
    padding: 40px 30px 40px;
  }
`;
const FooterContainer = styled.div`
  margin-bottom: 30px;
`;
const FooterSubMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const FooterSubMenu1 = styled.div``;
const FooterSubMenu2 = styled.div`
  margin-top: 20px;
`;

const CreatedBy = styled.small`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;
const LogoSection = styled.div`
  width: 150px;
  height: 100px;
  /* flex: 1; */
`;
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;
const FooterInput = styled.input`
  display: block;
  margin: 10px 0;
  border: none;
  outline: none;
  height: 30px;
  width: 150px;
  border-radius: 3px;
`;
const Button = styled.button`
  background-color: #3d7cc9;
  color: white;
  height: 30px;
  width: 80px;
  border: none;
  border-radius: 5px;
`;
const TitleText = styled.h6`
  font-size: 18px;
  margin-bottom: 15px;
`;
const FooterText = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
`;
