import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

export const Navbar = () => {
 
  return (
    <Container>
      <NavWrapper>
        <LogoSection>
          <LogoImage src={logo} />
        </LogoSection>
      </NavWrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 10px 62px;

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: auto
  }
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoSection = styled.div`
  width: 100px;
  height: 80px;
`;
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;