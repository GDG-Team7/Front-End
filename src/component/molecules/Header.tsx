import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <TitleBox>
        <Circle></Circle>
        <Title>코각모</Title>
      </TitleBox>
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
  background: #6246e4;
`;

const TitleBox = styled.div`
  display: flex;
`;

const Circle = styled.div`
  background: #fcbc14;
  border-radius: 50%;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const Title = styled.div`
  line-height: 20px;
  font-size: 20px;
`;

const Nav = styled.div``;

const NavItem = styled.span`
  margin-right: 25px;
`;
