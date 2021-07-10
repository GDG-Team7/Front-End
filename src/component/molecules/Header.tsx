import React from 'react';
import {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import TitleTemplate from '../templates/TitleTemplate';

const Header = () => {
  const history = useHistory();
  const loggedIn = localStorage.getItem('accessToken');

  const onClickStudy = useCallback(() => {
    if (loggedIn) {
      history.push('/');
    } else {
      console.log('로그인해');
    }
  }, [history, loggedIn]);

  const onClickMyPage = useCallback(() => {
    if (loggedIn) {
      history.push('/profile');
    } else {
      console.log('로그인해');
    }
  }, [history, loggedIn]);

  return (
    <HeaderContainer>
      <TitleTemplate />
      <Nav>
        <NavItem onClick={onClickStudy}>Study</NavItem>
        {!loggedIn && <NavItem>Login</NavItem>}
        <NavItem onClick={onClickMyPage}>My Page</NavItem>
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
