import React from 'react';
import styled from 'styled-components';
import TitleTemplate from '../templates/TitleTemplate';

const Header = () => {
  return (
    <HeaderContainer>
      <TitleTemplate />
      <Nav>
        <NavItem>Study</NavItem>
        <NavItem>Login</NavItem>
        <NavItem>My Page</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;

  justify-content: space-between;
  color: #ffffff;

  @media screen and (min-width: 515px) {
    padding: 3vh 12vw;
  }
  @media screen and (max-width: 515px) {
    padding: 10px;
  }
`;

const Nav = styled.div`
  @media screen and (max-width: 515px) {
    margin-left: 10px;
  }
`;

const NavItem = styled.span`
  cursor: pointer;
  @media screen and (min-width: 515px) {
    margin-right: 25px;
  }
  @media screen and (max-width: 515px) {
    margin-right: 15px;
  }
`;
