import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  const upperNavList = [
    {
      name: "Login",
    },
    {
      name: "Home",
    },
    {
      name: "Ticket",
    },
    {
      name: "News",
    },
    {
      name: "EN",
    },
  ];
 
  return (
    <Container>
      <NavWrapper>
        <LogoSection>
          <LogoImage src={logo} />
        </LogoSection>
        <NavBarMenu>
          <UpperNavMenu>
            {upperNavList.map((item, index) => (
              <NavItem key={index}>{item.name}</NavItem>
            ))}
          </UpperNavMenu>
        </NavBarMenu>
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
const NavBarMenu = styled.div`
  justify-self: flex-end;
`;
const UpperNavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
`;
const NavItem = styled.div``