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
  padding: 3vh 12vw;
  justify-content: space-between;
  color: #ffffff;
`;

const Nav = styled.div``;

const NavItem = styled.span`
  margin-right: 25px;
`;
